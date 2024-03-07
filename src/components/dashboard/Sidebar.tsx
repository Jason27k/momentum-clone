"use client";

import { usePathname } from "next/navigation";
import DashboardLink from "./Links";
import { PackageIcon, SettingsIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  const pathName = usePathname();
  const page = pathName.split("/")[2];
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <DashboardLink
          href="/"
          className={`${
            page === undefined
              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              : " "
          }`}
        >
          <UserIcon className="h-4 w-4" />
          <p className="hidden sm:block">Account Information</p>
        </DashboardLink>
        <DashboardLink
          href="subscription"
          className={`${
            page === "subscription"
              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              : " "
          }`}
        >
          <PackageIcon className="h-4 w-4" />
          <p className=" hidden sm:block">Subscription</p>
        </DashboardLink>
        <DashboardLink
          href="settings"
          className={`${
            page === "settings"
              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              : " "
          }`}
        >
          <SettingsIcon className="h-4 w-4" />
          <p className="hidden sm:block">Settings</p>
        </DashboardLink>
      </nav>
    </div>
  );
};

export default Sidebar;
