import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Links = ({ href, children, className }: LinkProps) => {
  return (
    <Link
      href={`/dashboard/${href}`}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hovertext-gray-50",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Links;
