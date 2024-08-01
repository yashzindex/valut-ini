import React from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
interface Sector {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
}

export default function Sectors() {
  const t = useTranslations("sectors");
  const messages = useMessages();

  let keys: string[] = [];
  if (typeof messages.sectors === "object" && messages.sectors !== null) {
    keys = Object.keys(messages.sectors.Cards);
  }
  return (
    <section
      id="sectors"
      className="relative z-[9] pt-[56px] mb-[26px] lg:pt-20 xl:pt-[158px] md:pb-[20px] xl;pb-[80px]"
    >
      <div className="container">
        <p className="text-primary text-[16px] md:text-[20px] font-normal leading-[160%] tracking-[3.4px] mb-[10px] md:mb-[20px] uppercase">
          {t("Title.title")}
        </p>
        <h2 className="text-secondary text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] xxl:text-[50px] font-extrabold leading-[127%]">
          {t("Title.subtitle")}
        </h2>
        <div className="w-full max-w-[906px] ml-auto mt-[42px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[28px] gap-[21px] md:gap-y-[32px] lg:gap-y-[41px]">
            {keys.map((key) => (
              <div
                key={key}
                className="shadow-sector-card-shadow bg-white rounded-[20px] pt-[30px] pb-[20px] px-[16px] md:px-[30px] max-md:gap-[20px] flex flex-row md:flex-col items-center"
              >
                <Image
                  src={t(`Cards.${key}.icon`)}
                  alt={`${t(`Cards.${key}.title`)} icon`}
                  className="object-contain h-[44px] w-[44px] md:mb-[20px] mr-auto"
                  width={44}
                  height={44}
                />
                <div className="w-[100%]">
                  <h5 className="text-[16px] md:text-[18px] text-primary font-bold leading-[127%] md:mb-[10px]">
                    {t(`Cards.${key}.title`)}
                  </h5>
                  <p className="text-[14px] md:text-[20px] text-secondary font-normal leading-[144%]">
                    {t(`Cards.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
