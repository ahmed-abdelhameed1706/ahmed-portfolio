"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            link.href === pathname && "text-accent border-b-2 border-accent"
          } hover:text-accent transition-all font-medium capitalize`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
