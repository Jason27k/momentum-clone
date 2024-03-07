"use client";

import { useEffect, useState } from "react";
import { getSubscription } from "@/actions/subscription";

const AccountSubscription = () => {
  const [subscription, setSubscription] = useState<string>("Free");

  useEffect(() => {
    const func = async () => {
      const subscription = getSubscription();
      setSubscription(subscription);
    };
    func();
  }, []);
  return (
    <div className="flex justify-center items-center">
      <span className="mr-2 font-medium">Subscription:</span>
      <span className="text-blue-500">{subscription}</span>
    </div>
  );
};

export default AccountSubscription;
