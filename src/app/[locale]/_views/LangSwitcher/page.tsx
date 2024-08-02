"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LangSwitcherProps = {
  onLanguageChange: (lang: string) => void;
};

export default function LangSwitcher({ onLanguageChange }: LangSwitcherProps) {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/es") ? "es" : "en";

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
  };

  return (
    <div className="z-20 flex items-center uppercase">
      <Link
        href="/es"
        className={`text-white text-[20px] font-normal leading-[20px] cursor-pointer ${
          currentLang === "es" ? "font-bold" : ""
        }`}
        onClick={() => handleLanguageChange("es")}
      >
        {currentLang === "es" ? <strong>Es</strong> : "Es"}
      </Link>
      <span className="text-white">| </span>
      <Link
        href="/en"
        className={`text-white text-[20px] font-normal leading-[20px] cursor-pointer ${
          currentLang === "en" ? "font-bold" : ""
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        {currentLang === "en" ? <strong>En</strong> : "En"}
      </Link>
    </div>
  );
}
