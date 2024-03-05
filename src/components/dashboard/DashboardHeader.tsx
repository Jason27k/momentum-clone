import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Topbar from "@/components/dashboard/Topbar";
import SidebarContainer from "@/components/dashboard/SidebarContainer";
import { useUserStore } from "@/lib/store";
import type { ReactNode } from "react";
import type { SubscriptionType } from "@/lib/store";
import { db } from "@/lib/db";
import { users as usersTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

type HeaderProps = {
  children: ReactNode;
};

const saveUserInfo = async (
  user: UserProfile,
  subscription: SubscriptionType
) => {
  const result = await db
    .selectDistinct({ email: usersTable.email })
    .from(usersTable)
    .where(eq(usersTable.email, user.email!));
  if (result.length === 0) {
    await db.insert(usersTable).values({
      email: user.email!,
      emailVerified: user.email_verified!,
      name: user.name!,
      picture: user.picture!,
      subscription: subscription,
    });
  }
};

const DashboardHeader = async ({ children }: HeaderProps) => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const setUser = useUserStore((state) => state.setUser);
  const page = useUserStore((state) => state.page);
  const subscription = useUserStore((state) => state.subscription);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user || !user.sub) router.push("/api/auth/login");
  setUser(user);
  if (user && subscription) {
    await saveUserInfo(user, subscription);
  }
  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40 text-black">
      <div className="hidden border-r lg:block dark:border-gray-800">
        <SidebarContainer />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar
          email={user?.email as string}
          image={user?.picture as string}
          pageName={
            page
              ? page.charAt(0).toUpperCase() + page.slice(1)
              : "Account Information"
          }
        />
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;
