"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AccountSubscription = () => {
  const [subscription, setSubscription] = useState<"Free" | "Premium">("Free");

  useEffect(() => {
    const func = async () => {
      const res = Cookies.get("subscription");
      if (!res) {
        console.log("No subscription in cookie");
        return;
      }
      console.log("subscription in cookie", res);
      // const subscription = JSON.parse(
      //   cookieStore.get("subscription")?.value as string
      // );

      // setSubscription(subscription.subscription);
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
