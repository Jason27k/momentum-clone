import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Gothic_A1({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard",
  description: "Launch your project with a stunning, professional theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("text-white", inter.className)}>{children}</body>
    </html>
  );
}
