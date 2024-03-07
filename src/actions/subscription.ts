"use server";

import { db } from "@/lib/db";
import { subscriptions } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { saveUserInfo } from "./user";
import { revalidatePath } from "next/cache";

export const getSubscription = () => {
  const cookieStore = cookies();
  if (cookieStore.has("subscription")) {
    const temp = JSON.parse(
      cookieStore.get("subscription")?.value as string
    ) as string;
    return temp;
  }
  return "Free";
};

export default async function updateUserSub(
  sub: "Free" | "Premium",
  userId: number
) {
  const cookieStore = cookies();

  const subscription = await db
    .update(subscriptions)
    .set({ subscription: sub === "Free" ? "Premium" : "Free" })
    .where(eq(subscriptions.userId, userId))
    .returning({ subscription: subscriptions.subscription });
  cookieStore.set("subscription", JSON.stringify(subscription[0].subscription));
  revalidatePath("/dashboard/subscription", "page");
  return subscription[0].subscription;
}

export const patchSub = async () => {
  console.log("patchSub");
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get("user")?.value as string);
  let userId = null;
  if (!cookieStore.has("userId")) {
    userId = await saveUserInfo(user);
  } else {
    userId = JSON.parse(cookieStore.get("userId")?.value as string);
  }
  let subscription;
  if (!cookieStore.has("subscription")) {
    subscription = await createSubscription(userId);
  } else {
    subscription = JSON.parse(cookieStore.get("subscription")?.value as string);
  }
  console.log(subscription);
  return updateUserSub(subscription, userId);
};

export async function createSubscription(userId: number) {
  const cookieStore = cookies();

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
}
