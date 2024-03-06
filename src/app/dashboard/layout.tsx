"use server";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import type { ReactNode } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserFromSession, saveUserInfo } from "@/actions/user";
import { createSubscription } from "@/actions/subscription";

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const user = await getUserFromSession();
  if (user instanceof Error) {
    console.log("LAYOUT");
    return <div>Loading...</div>;
  }
  const userId = await saveUserInfo(user);
  await createSubscription(userId);
  return (
    <>
      <DashboardHeader>{children}</DashboardHeader>;
    </>
  );
}
