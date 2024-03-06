"use server";

import { UserRoundX } from "lucide-react";
import Image from "next/image";
import { getUserInfoWithoutSession } from "@/actions/subscription";

const AccountInfo = async () => {
  const userInfo = await getUserInfoWithoutSession();
  if (userInfo instanceof Error) {
    return userInfo;
  }
  const { user, subscription } = userInfo;
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
      <div className="flex justify-center items-center">
        <span className="mr-2 font-medium">Subscription:</span>
        <span className="text-blue-500">{subscription}</span>
      </div>
    </div>
  );
};

export default AccountInfo;
