import { footerLinks } from "@/lib/constants";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-between text-[#6b6b6b] text-sm w-[60vw]">
      {footerLinks.map((link) => (
        <Link href="/" key={link} className="mx-auto text-center">
          {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
