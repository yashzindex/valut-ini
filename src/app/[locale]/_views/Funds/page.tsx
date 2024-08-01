import React from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export default function Funds() {
  const t = useTranslations("Portfolio");
  const messages = useMessages();

  let keys: string[] = [];

  if (typeof messages.Portfolio === "object" && messages.Portfolio !== null) {
    keys = Object.keys(messages.Portfolio.card || {});
  }

  return (
    <section
      id="portfolio"
      className="relative z-[9] pt-[28px] pb-[90px] md:py-12 lg:py-14 xl:pt-16 xl:pb-[120px] xxl:pt-20 xxl:pb-[190px]"
    >
      <div className="container">
        <p className="text-primary text-[16px] md:text-[20px] font-normal leading-[160%] tracking-[3.4px] mb-[10px] md:mb-[20px] uppercase">
          {t("funds")}
        </p>
        <div className="flex flex-col gap-[10px] md:gap-4 lg:gap-5 xl:gap-[24px] md:pl-6 lg:pl-8 xl:pl-[40px] md:border-l-[1px] border-secondary">
          <h2 className="text-secondary text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] xxl:text-[50px] font-extrabold leading-[127%]">
            {t("our_portfolio")}
          </h2>
          <p className="text-secondary text-[14px] md:text-[20px] xl:text-[25px] font-normal leading-[120%] xxl:leading-[212%]">
            {t("portfolio_description")}
          </p>
        </div>

        <div className="mt-10 xl:mt-12 xxl:mt-[77px] grid md:grid-cols-2 gap-[40px] md:gap-4 xl:gap-x-[17px]">
          {keys.map((key) => (
            <div
              key={key}
              className="bg-secondary rounded-[8px] overflow-hidden shadow-fund-card-shadow flex flex-col"
            >
              <Image
                src={t(`card.${key}.f_img`)} 
                alt="funds-card"
                className="w-full object-cover max-sm:h-[151px]"
                width={500}
                height={300}
              />
              <div className="flex flex-col py-5 px-4 md:p-8 lg:p-9 xl:p-10 xxl:pt-[50px] xxl:pb-[60px] xxl:px-[60px]">
                <p className="text-primary text-[20px] font-normal leading-[160%] tracking-[3.4px] mb-[10px] uppercase">
                  {t(`card.${key}.fund`)}
                </p>
                <h3 className="text-white text-[22px] md:text-[26px] lg:text-[32px] xl:text-[35px] font-extrabold leading-[127%]">
                  {t(`card.${key}.card_title`)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
