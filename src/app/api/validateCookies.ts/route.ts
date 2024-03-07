import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { cookies } from "next/headers";
import { saveUserInfo } from "@/actions/user";
import { createSubscription } from "@/actions/subscription";
import { redirect } from "next/navigation";

export async function validateCookies() {
  const cookieStore = cookies();
  const session = await getSession();
  if (!session) {
    redirect("/api/auth/login");
  }
  const sessionUser = session.user;
  if (!cookieStore.has("user")) {
    if (cookieStore.has("userId")) {
      cookieStore.delete("userId");
    }
    if (cookieStore.has("subscription")) {
      cookieStore.delete("subscription");
    }
    cookieStore.set("user", JSON.stringify(sessionUser));
    const userId = await saveUserInfo(sessionUser);
    await createSubscription(userId);
  } else {
    const user = JSON.parse(cookieStore.get("user")?.value as string);
    if (user !== sessionUser) {
      cookieStore.set("user", JSON.stringify(sessionUser));
      if (cookieStore.has("userId")) {
        cookieStore.delete("userId");
      }
      const userId = await saveUserInfo(sessionUser);
      if (cookieStore.has("subscription")) {
        cookieStore.delete("subscription");
      }
      await createSubscription(userId);
    }
  }
}

export const PATCH = withApiAuthRequired(async function myApiRoute() {
  console.log("cookieSetup");
  await validateCookies();
  redirect("/dashboard");
});
