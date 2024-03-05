"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <UserProvider>
      <DashboardHeader>{children}</DashboardHeader>
    </UserProvider>
  );
}
