import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { cookies } from "next/headers";
import { saveUserInfo } from "@/actions/user";
import { createSubscription } from "@/actions/subscription";
import { redirect } from "next/navigation";
import { NextApiRequest, NextApiResponse } from "next";

async function cookieSetup() {
  const cookieStore = cookies();
  const user = JSON.parse(cookieStore.get("user")?.value as string);
  let userId = null;
  if (!cookieStore.has("userId")) {
    userId = await saveUserInfo(user);
  } else {
    userId = JSON.parse(cookieStore.get("userId")?.value as string);
  }
  if (!cookieStore.has("subscription")) {
    await createSubscription(userId);
  }
}

export const GET = withApiAuthRequired(async function myApiRoute() {
  console.log("cookieSetup");
  await cookieSetup();
  redirect("/dashboard");
});

// export const PATCH = withApiAuthRequired(async function myApiRoute(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("TEST COOKIES");
//   console.log(req.body);
//   const cookieStore = cookies();
//   return res.status(200).json({ message: "success" });
// });
