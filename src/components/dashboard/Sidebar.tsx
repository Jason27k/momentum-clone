import DashboardLink from "./Links";
import { PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import { useUserStore } from "@/lib/store";

const Sidebar = () => {
  const page = useUserStore((state) => state.page);

  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <DashboardLink
          href="/"
          className={`${
            page === ""
              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
              : " "
          }`}
        >
          <UserIcon className="h-4 w-4" />
          Account Information
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
          Subscription
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
          Settings
        </DashboardLink>
      </nav>
    </div>
  );
};

export default Sidebar;
