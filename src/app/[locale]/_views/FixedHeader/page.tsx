"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import BlackLogo from "@/../../public/svg/BlackLogo.svg";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export default function FixedHeader() {
  const pathname = usePathname();
  const t = useTranslations("fixed_navbar");
  return (
    <div className="bg-white py-5 lg:py-[30px] xl:py-[35px]">
      <div className="container">
        <div className="w-full max-w-[1239px]">
          <div className="flex justify-between items-center">
            <div className="w-full max-w-[149px]">
              <Image src={BlackLogo} alt="black-logo" className="w-full" />
            </div>
            <div className="flex flex-row gap-[25px]">
              <li className="inline-block">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass="!text-primary"
                  className={`text-secondary  hover:text-primary transition-colors duration-500 text-[20px] font-normal leading-[144%]`}
                >
                  {t("home")}
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="sectors"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass="!text-primary"
                  className={`text-secondary  hover:text-primary transition-colors duration-500 text-[20px] font-normal leading-[144%]`}
                >
                  {t("sectors")}
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass="!text-primary"
                  className={`text-secondary  hover:text-primary transition-colors duration-500 text-[20px] font-normal leading-[144%]`}
                >
                  {t("portfolio")}
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass="!text-primary"
                  className={`text-secondary  hover:text-primary transition-colors duration-500 text-[20px] font-normal leading-[144%]`}
                >
                  {t("contact_us")}
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
