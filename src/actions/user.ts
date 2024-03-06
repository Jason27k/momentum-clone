import type { UserProfile } from "@auth0/nextjs-auth0/client";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { getSession } from "@auth0/nextjs-auth0";
import type { Claims } from "@auth0/nextjs-auth0";

let USER_ID: number | null = null;
let SESSION_INFO: Claims | null = null;

export const saveUserInfo = async (user: UserProfile) => {
  if (USER_ID) {
    return USER_ID;
  }
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
  return USER_ID;
};

export const getUserFromSession = async () => {
  if (SESSION_INFO) {
    return SESSION_INFO;
  }
  const session = await getSession();
  if (!session) {
    return new Error("No session found");
  }
  SESSION_INFO = session.user;
  return session.user;
};
