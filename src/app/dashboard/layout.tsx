"use server";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <DashboardHeader>
        {children}
        <Analytics />
      </DashboardHeader>
      ;
    </>
  );
}
