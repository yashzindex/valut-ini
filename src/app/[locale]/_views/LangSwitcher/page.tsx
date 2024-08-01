"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitcher() {
  const pathname = usePathname();

  return (
    <div className="z-20 flex items-center uppercase">
      <Link
        href="/es"
        className={`text-white text-[20px] font-normal leading-[20px] cursor-pointer ${
          pathname.startsWith("/es") ? "font-bold" : ""
        }`}
      >
        {pathname === "/es" ? <strong>Es</strong> : "Es"}
      </Link>
      <span className="text-white">|</span>
      <Link
        href="/en"
        className={`text-white text-[20px] font-normal leading-[20px] cursor-pointer ${
          pathname.startsWith("/en") ? "font-bold" : ""
        }`}
      >
        {pathname === "/en" ? <strong>En</strong> : "En"}
      </Link>
    </div>
  );
}
