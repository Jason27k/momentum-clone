"use server";

import type { UserProfile } from "@auth0/nextjs-auth0/client";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { getSession } from "@auth0/nextjs-auth0";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function saveUserInfo(user: UserProfile) {
  const cookieStore = cookies();
  if (cookieStore.has("userId")) {
    return JSON.parse(cookieStore.get("userId")?.value as string);
  }
  let USER_ID;
  const result = await db
    .select({ email: users.email, id: users.id })
    .from(users)
    .where(eq(users.email, user.email!));
  if (result.length === 0) {
    const userId = await db
      .insert(users)
      .values({
        email: user.email!,
        emailVerified: user.email_verified!,
        name: user.name!,
        picture: user.picture!,
      })
      .returning({ userId: users.id });
    USER_ID = userId[0].userId;
  } else {
    USER_ID = result[0].id;
  }
  cookieStore.set("userId", JSON.stringify(USER_ID));
  return USER_ID;
}

export async function getUserFromSession() {
  const cookieStore = cookies();
  if (cookieStore.has("user")) {
    return JSON.parse(cookieStore.get("user")?.value as string);
  }
  const session = await getSession();
  if (!session) {
    redirect("/api/auth/login");
  }
  return session.user;
}
