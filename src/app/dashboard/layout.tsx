"use server";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import type { ReactNode } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserFromSession, saveUserInfo } from "@/actions/user";

export default withPageAuthRequired(
  async function Layout({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
    const user = await getUserFromSession();
    if (user instanceof Error) {
      return <div>Loading...</div>;
    }
    await saveUserInfo(user);
    return (
      <>
        <DashboardHeader>{children}</DashboardHeader>;
      </>
    );
  },
  { returnTo: "/dashboard" }
);
