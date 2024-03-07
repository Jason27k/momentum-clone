"use server";

import Topbar from "@/components/dashboard/Topbar";
import SidebarContainer from "@/components/dashboard/SidebarContainer";
import { type ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

type HeaderProps = {
  children: ReactNode;
};

const DashboardHeader = async ({ children }: HeaderProps) => {
  const cookieStore = cookies();
  if (!cookieStore.has("user")) {
    redirect("/api/cookies");
  }
  const session = await getSession();
  const user = JSON.parse(cookieStore.get("user")?.value as string);
  if (!session) {
    redirect("/api/auth/login");
  }

  if (session.user.email !== user.email) {
    redirect("/api/validateCookies");
  }

  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40 text-black">
      <div className="border-r lg:block dark:border-gray-800">
        <SidebarContainer />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar email={user?.email as string} image={user?.picture as string} />
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
