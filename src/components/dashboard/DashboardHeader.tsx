"use server";

import Topbar from "@/components/dashboard/Topbar";
import SidebarContainer from "@/components/dashboard/SidebarContainer";
import { type ReactNode } from "react";
import { saveUserInfo } from "@/actions/user";
import { createSubscription } from "@/actions/subscription";
import { cookies } from "next/headers";

type HeaderProps = {
  children: ReactNode;
};

const DashboardHeader = async ({ children }: HeaderProps) => {
  const cookieStore = cookies();
  if (!cookieStore.has("user")) {
    console.log("No user in cookie");
    return <div>Loading...</div>;
  }

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
  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40 text-black">
      <div className="hidden border-r lg:block dark:border-gray-800">
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
