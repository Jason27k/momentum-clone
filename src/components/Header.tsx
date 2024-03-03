import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { links } from "@/lib/constants";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full flex h-24 items-center justify-center absolute">
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
        <div className="flex justify-between items-center md:flex-2 h-16">
          <div className="md:hidden">
            <Menu />
          </div>
          <div className="hidden md:block">
            {links.map((link, index) => (
              <Link
                href={`/${link.toLowerCase()}`}
                key={index}
                className={buttonVariants({
                  className:
                    "hover:border-b-4 hover:border-b-white text-lg rounded-none",
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
