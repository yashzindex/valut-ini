import React from "react";
import clsx from "clsx";
import { Animate } from "./Animate";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface BannerProps {
  className?: any;
}
export default function Banner() {
  const t = useTranslations("Hero");

  return (
    <section
      className={`relative bg-transparent pt-[205px] md:pt-[110px] lg:pt-[154px] pb-[83px] mb:pb-[150px] lg:pb-[130px] xl:pb-[140px] xxl:pb-[224px] xxl:min-h-screen`}
      id="home"
      // className=""
    >
      <div className="container">
        <div className="w-full md:max-w-[572px] lg:max-w-[653px] xl:max-w-[707px] xxl:max-w-[880px] relative z-[2]">
          <Animate />
          <h1 className="text-white text-[40px] md:text-[42px] lg:text-[48px] xl:text-[52px] xxl:text-[60px] font-normal leading-[127%] mb-5 sm:mb-[30px] max-sm:text-center max-sm:mb-[146px]">
            {t("a_leading")}{" "}
            <strong className="text-primary">{t("title_yellow")}</strong>
            <span className="md:hidden">&nbsp;</span>
            <br className="max-md:hidden" />
            {t.rich("americas_private", {
              "color-primary": (children) => (
                <span className="text-primary font-bold">{children}</span>
              ),
            })}
            <br className="max-md:hidden" />
            <span className="md:hidden">&nbsp;</span>
            {t.rich("credit_market", {
              "color-primary": (children) => (
                <span className="text-primary font-bold">{children}</span>
              ),
            })}
          </h1>
          <p className="text-white md:text-[24px] lg:text-[28px] xl:text-[32px] xxl:text-[35px] font-normal leading-[11%0] mb-[30px] max-sm:hidden xl:max-w-[590px]">
            {t("hero-subline")}
          </p>
          <Link
            href="#contact"
            className="bg-primary hover:bg-transparent hover:border-primary border-[1px] border-transparent inline-block text-white text-center rounded-[5px] text-[18px] font-bold leading-[127%] max-sm:w-full max-w-full py-[11px] px-[37px] transition-colors duration-500"
          >
            {t("hero_contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
