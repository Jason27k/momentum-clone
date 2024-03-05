import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { links } from "@/lib/constants";
import { buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <div className="z-50 w-full flex h-24 items-center justify-center absolute scroll-smooth">
      <div className="w-full flex md:mx-[10vw]">
        <div className="flex-1 flex items-center">
          <Link href="/main">
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
            <Drawer>
              <DrawerTrigger>
                <Menu />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>Navigation</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button>Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="hidden md:block">
            {links.map((link, index) => (
              <Link
                href={`${
                  link.toLowerCase() === "dashboard"
                    ? "/dashboard"
                    : "#" + link.toLowerCase()
                }`}
                key={index}
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
