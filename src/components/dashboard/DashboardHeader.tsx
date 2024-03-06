"use server";

import Topbar from "@/components/dashboard/Topbar";
import SidebarContainer from "@/components/dashboard/SidebarContainer";
import { type ReactNode } from "react";
import { getUserFromSession, saveUserInfo } from "@/actions/user";

type HeaderProps = {
  children: ReactNode;
};

const DashboardHeader = async ({ children }: HeaderProps) => {
  const user = await getUserFromSession();
  if (user instanceof Error) {
    return <div>Loading...</div>;
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
