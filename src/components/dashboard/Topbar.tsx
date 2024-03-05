import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  email: string;
  image: string;
  pageName: string;
}

const Topbar = ({ email, image, pageName }: TopbarProps) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden text-2xl font-bold tracking-tighter" href="#">
        Richard
      </Link>
      <div className="flex-1 text-sm font-medium">{pageName}</div>
      <div className="flex items-center">
        <span className="text-sm font-medium mr-2">{email}</span>
        <Button className="rounded-full" size="icon" variant="ghost">
          <Image
            alt="Avatar"
            className="rounded-full"
            height="32"
            src={image}
            width="32"
          />
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
