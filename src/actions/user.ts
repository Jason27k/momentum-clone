import type { UserProfile } from "@auth0/nextjs-auth0/client";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { getSession } from "@auth0/nextjs-auth0";

export const saveUserInfo = async (user: UserProfile) => {
  const result = await db
    .select({ email: users.email })
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
    return userId[0].userId;
  } else {
    return "User already exists";
  }
};

export const getUserFromSession = async () => {
  const session = await getSession();
  if (!session) {
    return new Error("No session found");
  }
  return session.user;
};
