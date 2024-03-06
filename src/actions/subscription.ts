"use server";

import { db } from "@/lib/db";
import { subscriptions, users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { getUserFromSession } from "./user";
import { Claims } from "@auth0/nextjs-auth0";

let USER_INFO: {
  user: Claims;
  userId: number;
  subscription: "Free" | "Premium";
} | null = null;

let USER_ID:
  | {
      id: number;
    }[]
  | null = null;

let USER_SUB:
  | {
      subscription: "Free" | "Premium";
    }[]
  | null = null;

let CREATE_USER_SUB: "Free" | "Premium" | null = null;

const UserInfoWithUserEmail = async (user: Claims) => {
  if (USER_INFO) {
    return USER_INFO;
  }
  const userData = await getUserId(user.email);
  let temp = await getUserSub(userData[0].id);
  let subscription;
  if (temp.length === 0) {
    const otherTemp = await createSubscription(userData[0].id);
    if (typeof otherTemp === "string") {
      return new Error(otherTemp);
    }
    subscription = otherTemp;
  } else {
    subscription = temp[0].subscription;
  }
  USER_INFO = {
    user: user,
    userId: userData[0].id,
    subscription: subscription,
  };
  return {
    user: user,
    userId: userData[0].id,
    subscription: subscription,
  };
};

export const getUserId = async (email: string | null | undefined) => {
  if (USER_ID) {
    return USER_ID;
  }
  USER_ID = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email!));
  return USER_ID;
};

export const getUserSub = async (userId: number) => {
  if (USER_SUB) {
    return USER_SUB;
  }
  USER_SUB = await db
    .select({ subscription: subscriptions.subscription })
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId));
  return USER_SUB;
};

export const updateUserSub = async (
  sub: "Free" | "Premium",
  userId: number
) => {
  USER_SUB = await db
    .update(subscriptions)
    .set({ subscription: sub === "Free" ? "Premium" : "Free" })
    .where(eq(subscriptions.userId, userId))
    .returning({ subscription: subscriptions.subscription });
  if (USER_INFO) {
    USER_INFO.subscription = USER_SUB[0].subscription;
  }
  return USER_SUB;
};

export const patchSub = async () => {
  const userInfo = await getUserInfoWithoutSession();
  if (userInfo instanceof Error) {
    return userInfo;
  }
  updateUserSub(userInfo.subscription, userInfo.userId);
};

export const getUserInfoWithoutSession = async () => {
  if (USER_INFO) {
    return USER_INFO;
  }
  const user = await getUserFromSession();
  if (user instanceof Error) {
    return user;
  }
  return UserInfoWithUserEmail(user);
};

export const createSubscription = async (userId: number) => {
  if (CREATE_USER_SUB) {
    return CREATE_USER_SUB;
  }
  const result = await db
    .select({
      userId: subscriptions.userId,
      subscriptions: subscriptions.subscription,
    })
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId));
  if (result.length === 0) {
    const subscription = await db
      .insert(subscriptions)
      .values({
        userId: userId,
        subscription: "Free",
      })
      .returning({ subscriptions: subscriptions.subscription });
    CREATE_USER_SUB = subscription[0].subscriptions;
    return CREATE_USER_SUB;
  } else {
    CREATE_USER_SUB = result[0].subscriptions;
    return CREATE_USER_SUB;
  }
};
