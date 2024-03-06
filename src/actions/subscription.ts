"use server";

import { db } from "@/lib/db";
import { subscriptions } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

const cookieStore = cookies();

export const getSubscription = () => {
  if (cookieStore.has("subscription")) {
    return JSON.parse(cookieStore.get("subscription")?.value as string);
  }
  return "Free";
};

export const updateUserSub = async (
  sub: "Free" | "Premium",
  userId: number
) => {
  const subscription = await db
    .update(subscriptions)
    .set({ subscription: sub === "Free" ? "Premium" : "Free" })
    .where(eq(subscriptions.userId, userId))
    .returning({ subscription: subscriptions.subscription });
  cookieStore.set("subscription", JSON.stringify(subscription[0].subscription));
  return subscription[0].subscription;
};

export const patchSub = async () => {
  const userId = JSON.parse(cookieStore.get("userId")?.value as string);
  const subscription = JSON.parse(
    cookieStore.get("subscription")?.value as string
  );
  return updateUserSub(subscription, userId);
};

export const createSubscription = async (userId: number) => {
  if (cookieStore.has("subscription")) {
    return JSON.parse(cookieStore.get("subscription")?.value as string);
  }
  const result = await db
    .select({
      userId: subscriptions.userId,
      subscriptions: subscriptions.subscription,
    })
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId));
  let CREATE_USER_SUB;
  if (result.length === 0) {
    const subscription = await db
      .insert(subscriptions)
      .values({
        userId: userId,
        subscription: "Free",
      })
      .returning({ subscriptions: subscriptions.subscription });
    CREATE_USER_SUB = subscription[0].subscriptions;
  } else {
    CREATE_USER_SUB = result[0].subscriptions;
  }
  cookieStore.set("subscription", JSON.stringify(CREATE_USER_SUB));
  return CREATE_USER_SUB;
};
