"use client";

import { Button } from "@/components/ui/button";
import { patchSub } from "@/actions/subscription";
import { getUserInfoWithoutSession } from "@/actions/subscription";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import type { Claims } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Subscription() {
  const [user, setUser] = useState<{
    user: Claims;
    userId: number;
    subscription: "Free" | "Premium";
  } | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const func = async () => {
      const userInfo = await getUserInfoWithoutSession();
      if (userInfo instanceof Error) {
        console.log("Subscription Error: ", userInfo.message);
        return;
      }
      setUser(userInfo);
    };
    func();
  }, [isClicked]);
  const onClick = () => {
    console.log("clicked");
    setIsClicked((prev) => !prev);
    patchSub();
  };
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
          {user &&
            {
              Free: (
                <p className="text-gray-500 dark:text-gray-400">
                  You are currently on the Free plan. View our other plans to
                  upgrade your subscription.
                </p>
              ),
              Premium: (
                <p className="text-gray-500 dark:text-gray-400">
                  You are currently on the Pro plan. View our other plans to
                  downgrade your subscription.
                </p>
              ),
            }[user.subscription]}
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="font-semibold">Current Plan</div>
            {user &&
              {
                Free: (
                  <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Free (Limited Features)
                  </div>
                ),
                Premium: (
                  <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Pro Plan ($19/month)
                  </div>
                ),
              }[user.subscription]}
            <Button className="w-full" onClick={onClick}>
              Change Plan
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
});
