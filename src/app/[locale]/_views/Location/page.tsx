import React from "react";
import Image from "next/image";
import world from "@/../../public/images/world.png";
import worldM from "@/../../public/images/worldM.png";
import { useTranslations } from "next-intl";
export default function Location() {
  const t = useTranslations("Locations");

  return (
    <section id="location" className="relative bg-secondary pt-[52px] pb-[70px] md:py-12 xl:pt-[96px] xxl:pt-[108px] lg:pb-[130px] xl:pb-[150px] xxl:pb-[233px] overflow-hidden">
      <div className="container">
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="block pb-[400px] sm:pb-[450px] md:pb-28 lg:pb-[140px] xl:pb-[160px] xxl:pb-[198px]">
            <p className="text-primary text-[16px] md:text-[20px] font-normal leading-[160%] tracking-[3.4px] mb-[10px] md:mb-[20px] uppercase">
              {t("what_are_we")}
            </p>
            <h2 className="text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] xxl:text-[50px] font-extrabold leading-[127%]">
              {t("our_locations")}
            </h2>
          </div>
          <div className="flex flex-row max-sm:justify-center gap-[58px] md:flex-col">
            <div className="inline-block border-l-[1px] border-white pl-5">
              <p className="text-primary text-[18px] sm:text-[20px] lg:text-[25px] font-bold leading-[144%] lg:leading-[212%]">
                {t("mexico")}
              </p>
              <p className="text-white text-[14px] sm:text-[20px] lg:text-[25px] font-light leading-[144%] lg:leading-[128%]">
                {t("mexico_city")}
              </p>
            </div>
            <div className="inline-block border-l-[1px] border-white pl-5">
              <p className="text-primary text-[18px] sm:text-[20px] lg:text-[25px] font-bold leading-[144%] lg:leading-[212%]">
                {t("uk")}
              </p>
              <p className="text-white text-[14px] sm:text-[20px] lg:text-[25px] font-light leading-[144%] lg:leading-[128%]">
                {t("london")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={world}
        alt="world"
        className="absolute h-full top-0 right-0 w-full max-w-[75%] hidden md:block"
      />
      <Image
        src={worldM}
        alt="worldM"
        className="absolute h-[400px] sm:h-[450px] top-[126px] right-[-14px] w-full max-w-[95%] sm:max-w-[75%] md:hidden"
      />
    </section>
  );
}
