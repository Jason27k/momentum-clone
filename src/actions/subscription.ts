"use server";

import { db } from "@/lib/db";
import { subscriptions, users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { getUserFromSession } from "./user";
import { Claims } from "@auth0/nextjs-auth0";

const UserInfoWithUserEmail = async (user: Claims) => {
  const userData = await getUserId(user.email);
  const subData = await getUserSub(userData[0].id);
  const subscription = subData[0].subscription;
  return {
    user: user,
    userId: userData[0].id,
    subscription: subscription,
  };
};

export const getUserId = async (email: string | null | undefined) => {
  return await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email!));
};

export const getUserSub = async (userId: number) => {
  return await db
    .select({ subscription: subscriptions.subscription })
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId));
};

export const updateUserSub = async (
  sub: "Free" | "Premium",
  userId: number
) => {
  await db
    .update(subscriptions)
    .set({ subscription: sub === "Free" ? "Premium" : "Free" })
    .where(eq(subscriptions.userId, userId));
};

export const patchSub = async () => {
  const userInfo = await getUserInfoWithoutSession();
  if (userInfo instanceof Error) {
    return userInfo;
  }
  updateUserSub(userInfo.subscription, userInfo.userId);
};

export const getUserInfoWithoutSession = async () => {
  const user = await getUserFromSession();
  if (user instanceof Error) {
    return user;
  }
  return UserInfoWithUserEmail(user);
};

export const createSubscription = async (userId: number) => {
  const result = await db
    .select({ userId: subscriptions.userId })
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId));
  if (result.length === 0) {
    await db.insert(subscriptions).values({
      userId: userId,
      subscription: "Free",
    });
    return "Subscription info saved";
  } else {
    return "Subscription already exists";
  }
};
