"use server";

import { Package2Icon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { getSubscription } from "@/actions/subscription";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SidebarContainer = async () => {
  const cookieStore = cookies();
  console.log(cookieStore.has("subscription"));
  if (!cookieStore.has("subscription")) {
    redirect("/api/cookies");
  }
  const subscription = JSON.parse(
    cookieStore.get("subscription")?.value as string
  );
  console.log(subscription);
  return (
    <div className="flex h-full max-h-screen sm:flex-col gap-2">
      <div className="hidden sm:flex h-[60px] items-center border-b px-6">
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
