"use server";
import { ChangeSubButton } from "@/components/dashboard/ChangeSubButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Subscription = () => {
  const cookieStore = cookies();
  if (!cookieStore.has("subscription")) {
    redirect("/api/cookies");
  }
  const subscription = JSON.parse(
    cookieStore.get("subscription")?.value as string
  );
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
          {subscription === "Free" ? (
            <p className="text-gray-500 dark:text-gray-400">
              You are currently on the Free plan. View our other plans to
              upgrade your subscription.
            </p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              You are currently on the Pro plan. View our other plans to
              downgrade your subscription.
            </p>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="font-semibold">Current Plan</div>
            {subscription === "Free" ? (
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Free (Limited Features)
              </div>
            ) : (
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Pro Plan ($19/month)
              </div>
            )}
            <ChangeSubButton
              text={subscription === "Free" ? "Upgrade" : "Cancel"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscription;
