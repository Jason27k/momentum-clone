"use server";

import { UserRoundX } from "lucide-react";
import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AccountSubscription from "@/components/dashboard/AccountSubscription";
import { getUserFromSession } from "@/actions/user";
import { redirect } from "next/navigation";

const AccountInfo = async () => {
  const user = await getUserFromSession();
  if (!user) {
    redirect("/api/cookies");
  }
  return (
    <div className="h-full flex flex-col bg-gray-100 p-4 rounded-md">
      {user.image ? (
        <Image
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={user?.picture as string}
          alt="Avatar"
        />
      ) : (
        <UserRoundX className="w-24 h-24 mx-auto mb-4" />
      )}
      <h2 className="text-xl font-medium text-center">{user.name}</h2>
      <p className="text-gray-600 text-center mb-4">{user.email}</p>
      <AccountSubscription />
    </div>
  );
};

export default withPageAuthRequired(AccountInfo);
