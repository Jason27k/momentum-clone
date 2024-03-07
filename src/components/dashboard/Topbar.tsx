"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopbarProps {
  email: string;
  image: string;
}

const Topbar = ({ email, image }: TopbarProps) => {
  const pathName = usePathname();
  const page = pathName.split("/")[2];

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden text-2xl font-bold tracking-tighter" href="/">
        Richard
      </Link>
      <div className="flex-1 text-sm font-medium">
        {page === undefined
          ? "Account Information"
          : page.charAt(0).toUpperCase() + page.slice(1)}
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium mr-2">{email}</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2 sm:hidden">
                {email}
              </span>

              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src={image}
                width="32"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a href="/api/auth/logout">Logout</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Topbar;
