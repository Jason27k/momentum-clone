"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { links } from "@/lib/constants";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    console.log("Menu Clicked");
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="z-50 w-full flex h-24 items-center justify-center absolute scroll-smooth">
      <div className="w-full flex md:mx-[10vw]">
        <div className="flex-1 flex items-center">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo Image"
              width="120"
              height="43"
            />
          </Link>
        </div>
        <div
          className={cn(
            "flex justify-between items-center md:flex-2 h-16 w-16 md:w-auto",
            isMenuOpen ? "bg-black md:bg-transparent" : ""
          )}
        >
          <div className="md:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger onClick={handleMenuClick}>
                <div onClick={() => handleMenuClick}>
                  <Menu className="w-10 h-auto mx-auto" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen bg-black text-white rounded-none border-0 h-[20vh]">
                {links.map((link) => (
                  <DropdownMenuItem
                    className="h-1/4 pl-8 font-semibold text-[1rem]"
                    key={link}
                  >
                    <Link
                      href={`${
                        link.toLowerCase() === "dashboard"
                          ? "/dashboard"
                          : "/#" + link.toLowerCase()
                      }`}
                    >
                      {link}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:block">
            {links.map((link) => (
              <Link
                href={`${
                  link.toLowerCase() === "dashboard"
                    ? "/dashboard"
                    : "#" + link.toLowerCase()
                }`}
                key={link}
                className={buttonVariants({
                  className:
                    "hover:underline underline-offset-[20px] decoration-[5px] decoration-[#fc0a7e]",
                  variant: "ghost",
                })}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
