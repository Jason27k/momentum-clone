"use client";

import { useUserStore } from "@/lib/store";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserRoundX } from "lucide-react";
import Image from "next/image";

const AccountInfo = () => {
  const setPage = useUserStore((state) => state.setPage);
  setPage("");
  const user = useUserStore((state) => state.user);
  const subscription = useUserStore((state) => state.subscription);
  return (
    <div className="h-full flex flex-col bg-gray-100 p-4 rounded-md">
      {user?.image ? (
        <Image
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={user?.picture as string}
          alt="Avatar"
        />
      ) : (
        <UserRoundX className="w-24 h-24 mx-auto mb-4" />
      )}
      <h2 className="text-xl font-medium text-center">{user?.name}</h2>
      <p className="text-gray-600 text-center mb-4">{user?.email}</p>
      <div className="flex justify-center items-center">
        <span className="mr-2 font-medium">Subscription:</span>
        <span className="text-blue-500">{subscription}</span>
      </div>
    </div>
  );
};

export default AccountInfo;
