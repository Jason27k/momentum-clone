"use client";

import { Button } from "@/components/ui/button";
import { patchSub } from "@/actions/subscription";
import { getUserInfoWithoutSession } from "@/actions/subscription";

const onClick = () => {
  console.log("clicked");
  patchSub();
};

const Subscription = () => {
  const userInfo = getUserInfoWithoutSession();
  if (userInfo instanceof Error) {
    return <div>Error</div>;
  }

  return (
    <main className="flex-1 p-6">
      <div
        className="grid max-w-4xl gap-6 mx-auto text-center 
      lg:grid-cols-2 xl:max-w-5xl xl:gap-10 xl:text-left"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">
            Your Subscription
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            You are currently on the Pro plan. View our other plans to upgrade
            or downgrade your subscription.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="font-semibold">Current Plan</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Pro Plan ($19/month)
            </div>
            <Button className="w-full" onClick={onClick}>
              Change Plan
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscription;
