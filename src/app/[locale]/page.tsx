
import React from "react";
import Image from "next/image";
import Footer from "@/app/[locale]/_views/Footer/page";
import Funds from "@/app/[locale]/_views/Funds/page";
import Sectors from "@/app/[locale]/_views/Sectors/page";
import Contact from "@/app/[locale]/_views/Contact/page";
import Navbar from "@/app/[locale]/_views/Navbar/page";
import Banner from "@/app/[locale]/_views/Banner/page";
import Location from "@/app/[locale]/_views/Location/page";
import sectoreBG from "@/../../public/images/sectoreBG.png";
import BannerBG from "@/../../public/images/BannerBG.png";
import BannerBGM from "@/../../public/images/BannerBGM.png";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Home() {
  const messages = useMessages();

  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <div className="bg-secondary relative pt-[16px] md:pt-[35px]">
          <Navbar />
          <Banner />
          <Image
            src={BannerBGM}
            alt="BannerBG"
            className="object-contain absolute top-0 right-0 z-[1] md:hidden"
          />
          <Image
            src={BannerBG}
            alt="BannerBG"
            className="object-contain absolute top-0 right-0 z-[1] md:max-w-[36%] lg:max-w-[40%] xl:max-w-[44%] xxl:max-w-full max-md:hidden"
          />
        </div>
        <div className="relative  bg-[#F7F8F7]">
          <Sectors />
          <Funds />
          <Image
            src={sectoreBG}
            alt="sectoreBG"
            className="object-contain   hidden md:block absolute top-2 xl:top-0 left-0 z-[1] lg:max-w-[70%] xl:max-w-[80%] xxl:max-w-auto"
          />
        </div>
        <Location />
        <Contact />
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
