"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HLogo from "@/../../public/svg/HLogo.svg";
import close from "@/../../public/svg/close.svg";
import Humbergure from "@/../../public/images/humberguer.png";
import LangSwitcher from "../LangSwitcher/page";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("Navmenu");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const initialLang = pathname.startsWith("/es") ? "es" : "en";
  const [currentLang, setCurrentLang] = useState<string>(initialLang);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <section className="relative z-[999] bg-transparent">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <div className="w-full max-w-[87px] md:max-w-[149px]">
            <Image src={HLogo} alt="logo" className="w-full" />
          </div>
          <div className="flex flex-row gap-[24px] md:gap-[32px] xl:gap-[42px] xxl:gap-[50px]">
            <LangSwitcher onLanguageChange={handleLanguageChange} />
            <div className="relative z-20 h-fit my-auto">
              <div
                className="z-20 flex flex-col justify-between gap-[6px] cursor-pointer hover:opacity-60 transition-opacity duration-500"
                onClick={openMenu}
              >
                <div className="h-[3px] w-[27px] md:w-[54px] bg-white"></div>
                <div className="h-[3px] w-[16px] md:w-[34px] bg-white"></div>
              </div>
              <div className="absolute z-50 max-sm:fixed max-sm:left-0 max-sm:top-0 sm:top-[-22px]  md:-top-10 sm:right-0">
                {isOpen && (
                  <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} currentLang={currentLang} />
                )}
              </div>
              {isOpen && (
                <div
                  onClick={openMenu}
                  className="fixed left-0 top-0 h-screen w-screen bg-black opacity-20 transition-all duration-500"
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DropdownMenu({
  isOpen,
  setIsOpen,
  currentLang,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentLang: string;
}) {
  const t = useTranslations("Navmenu");

  return (
    <div className="!z-[999] relative rounded-[10px] bg-secondary px-[30px] pb-[50px] pt-[16px] md:pt-[40px] shadow-[0px_4px_40px_0px_#FFFFFF4D] max-sm:h-screen max-sm:w-screen">
      <ul className="flex flex-col gap-[25px] text-nowrap pr-[30px] bg-secondary">
        <li className="inline-block">
          <Link
            href="#sectors"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary text-[20px] font-normal leading-[144%]"
          >
            {t("our_sectors")}
          </Link>
        </li>
        <li className="inline-block">
          <Link
            href="#portfolio"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary text-[20px] font-normal leading-[144%]"
          >
            {t("portfolio")}
          </Link>
        </li>
        <li className="inline-block">
          <Link
            href={`https://www.vault-capital.com/individuals/${currentLang}`}
            target="_blank"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary text-[20px] font-normal leading-[144%]"
          >
            {t("individual_investment")}
          </Link>
        </li>
        <li className="inline-block">
          <Link
            href="#contact"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary text-[20px] font-normal leading-[144%]"
          >
            {t("contact_us")}
          </Link>
        </li>
        <li className="inline-block">
          <Link
            href={`https://www.vault-capital.com/legal`}
            target="_blank"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary text-[20px] font-normal leading-[144%] cursor-pointer"
          >
            {t("legal")}
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer absolute top-[16px] right-[16px] md:top-[40px] md:right-[30px] z-10 group"
      >
        <Image
          src={close}
          alt="close"
          className="w-[25px] h-[25px] group-hover:opacity-60 transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
