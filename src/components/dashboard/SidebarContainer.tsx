"use server";

import { Package2Icon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import { getUserInfoWithoutSession } from "@/actions/subscription";

const SidebarContainer = async () => {
  const userData = await getUserInfoWithoutSession();
  if (userData instanceof Error) {
    return <div>Loading...</div>;
  }
  const subscription = userData.subscription;
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link
          href="/"
          className="flex items-center border-b px-6          text-black"
        >
          <Package2Icon className="h-6 w-6" />
          <span>Richard</span>
        </Link>
      </div>
      <Sidebar />
      <div className="flex h-[60px] items-center border-t px-6">
        {subscription === "Free" && (
          <Button className="mx-auto shrink-0">Upgrade to Pro</Button>
        )}
      </div>
    </div>
  );
};

export default SidebarContainer;
