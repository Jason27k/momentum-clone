"use client";

import { useEffect, useState } from "react";
import { getUserSub } from "@/actions/subscription";

interface AccountSubscriptionProps {
  userId: number;
}

const AccountSubscription = ({ userId }: AccountSubscriptionProps) => {
  const [subscription, setSubscription] = useState<"Free" | "Premium">("Free");
  useEffect(() => {
    const func = async () => {
      const userSub = await getUserSub(userId);
      if (userSub instanceof Error) {
        console.log("AccountSubscription Error: ", userSub.message);
        return;
      }
      setSubscription(userSub[0].subscription);
    };
    func();
  }, [userId]);
  return (
    <div className="flex justify-center items-center">
      <span className="mr-2 font-medium">Subscription:</span>
      <span className="text-blue-500">{subscription}</span>
    </div>
  );
};

export default AccountSubscription;
