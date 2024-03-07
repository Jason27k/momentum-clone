"use server";

import { Package2Icon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { getSubscription } from "@/actions/subscription";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const SidebarContainer = async () => {
  const subscription = getSubscription();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link href="/" className="flex items-center border-b px-6 text-black">
          <Package2Icon className="h-6 w-6" />
          <span>Richard</span>
        </Link>
      </div>
      <Sidebar />
      <div className="flex h-[60px] items-center border-t px-6">
        {subscription === "Free" && (
          <Link
            href="/dashboard/subscription"
            className={cn(
              buttonVariants({
                className: "",
              }),
              "mx-auto shrink-0"
            )}
          >
            Upgrade to Pro
          </Link>
        )}
      </div>
    </div>
  );
};

export default SidebarContainer;
