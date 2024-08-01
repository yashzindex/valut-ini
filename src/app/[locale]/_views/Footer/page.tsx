import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../../public/images/Logo.png";
import footerBg from "@/../../public/images/footerBg.png";
import x from "@/../../public/svg/x.svg";
import facebook from "@/../../public/svg/facebook.svg";
import instagram from "@/../../public/svg/instagram.svg";
import linkedin from "@/../../public/svg/linkedin.svg";
import mail from "@/../../public/svg/mail.svg";
import flag from "@/../../public/svg/flag.svg";
import { useTranslations } from "next-intl";

interface FooterProps {
  ContactDetailsDestop: React.FC;
  ContactDetailsMobile: React.FC;
  FooterMenu: React.FC;
}

export interface SocialMediaLink {
  href: string;
  target: string;
  src: any;
  alt: string;
  className?: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "https://www.linkedin.com/company/vault-investments-limited/",
    target:"_blank",
    src: linkedin, 
    alt: "linkedin-logo",
    className:
      "inline-block w-full max-w-[26px] md:max-w-[32px] hover:opacity-70",
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <section className="bg-secondary relative py-[67px] md:py-14 lg:py-16 xl:py-20 xxl:pt-[100px] xxl:pb-[217px] overflow-hidden">
      <div className="container">
        <div className="flex max-md:flex-col gap-10 md:gap-20 xl:gap-[172px] w-full max-w-[800px] relative z-[2]">
          <div className="flex flex-col max-md:gap-8">
            <Link
              href="/"
              className="inline-bold w-full md:max-w-[380px] lg:max-w-[438px] mb-[18px] sm:mb-0 md:mb-[61px]"
            >
              <Image
                src={Logo}
                alt="footer-logo"
                height="67"
                width="438"
                className="object-cover w-full"
              />
            </Link>
            <div className="flex justify-center items-center gap-[47px] md:gap-[50px] xl:gap-[58px] md:mb-[60px] lg:mb-[112px]">
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={link.className}
                  target={link.target}
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    height={32}
                    width={32}
                    className="object-cover w-full max-sm:mb-1"
                  />
                </Link>
              ))}
            </div>
            {/* contact us Mobile-phone btn */}
            <div className="inline-flex w-full max-w-[361px] text-center mx-auto my-[30px] sm:my-5 md:my-[70px] md:mt-0 md:hidden">
              <Link
                href="#contact"
                className="text-primary hover:text-white w-full rounded-[3.729px] border-[1px] border-primary hover:border-white text-[12.95px] font-bold leading-[127%] p-[8px]"
              >
                Contact Us
              </Link>
            </div>
            {/* desktop email & addredd */}
            <ContactDetailsDestop />
          </div>
          <FooterMenu />
          {/* mobile email & addredd */}
          <ContactDetailsMobile />
        </div>
      </div>
      <Image
        src={footerBg}
        alt="image"
        className="absolute right-0 bottom-0 object-cover z-[1] max-md:hidden"
      />
    </section>
  );
}

function ContactDetailsDestop() {
  return (
    <div className="hidden md:flex flex-col gap-[24px]">
      <div className="flex gap-[24px]">
        <Image
          src={mail}
          alt="mail"
          className="object-contain h-[20px] w-[25px] mt-[4px]"
        />
        <Link
          href="mailto:contact@vault.com.mx"
          className="text-[20px] font-normal leading-[144%] text-white hover:text-primary transition-colors duration-500"
        >
          contact@vault.com.mx
        </Link>
      </div>
      <div className="flex gap-[24px]">
        <Image
          src={flag}
          alt="flag"
          className="object-contain h-[20px] w-[25px] mt-[4px]"
        />
        <p className="text-[20px] font-normal leading-[144%] text-white">
          71-75 Shelton Street, Covent Garden, <br />
          London, WC2H 9JQ
        </p>
      </div>
    </div>
  );
}

function ContactDetailsMobile() {
  return (
    <div className="flex md:hidden flex-col gap-[21px]">
      <div className="flex gap-[19px]">
        <Image
          src={mail}
          alt="mail"
          className="object-contain h-[13px] md:h-[20px] w-[20px] mt-1"
        />
        <Link
          href="mailto:contact@vault.com.mx"
          className="text-[16px] md:text-[20px] font-normal leading-[144%] text-white hover:text-primary transition-colors duration-500"
        >
          contact@vault.com.mx
        </Link>
      </div>
      <div className="flex gap-[19px]">
        <Image
          src={flag}
          alt="flag"
          className="object-contain h-[13px] md:h-[20px] w-[20px] mt-1"
        />
        <p className="text-[16px] md:text-[20px] font-normal leading-[144%] text-white">
          71-75 Shelton Street, Covent Garden, <br />
          London, WC2H 9JQ
        </p>
      </div>
    </div>
  );
}

function FooterMenu() {
  const t = useTranslations("Footer");
  return (
    <ul className="flex flex-col gap-[15px] md:gap-8 lg:gap-10 xl:gap-[50px] max-sm:mb-[30px]">
      <li className="inline-block">
        <Link
          className="text-[13.439px] md:text-[18px] font-normal hover:font-bold leading-[144%] transition-all duration-300 text-white hover:text-primary "
          href="#home"
        >
          {t("home")}
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="text-[13.439px] md:text-[18px] font-normal hover:font-bold leading-[144%] transition-all duration-300 text-white hover:text-primary "
          href="#sectors"
        >
          {t("our_focus_sectors")}
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="text-[13.439px] md:text-[18px] font-normal hover:font-bold leading-[144%] transition-all duration-300 text-white hover:text-primary "
          href="#portfolio"
        >
          {t("portfolio")}
        </Link>
      </li>
      <li className="inline-block">
        <Link
          className="text-[13.439px] md:text-[18px] font-normal hover:font-bold leading-[144%] transition-all duration-300 text-white hover:text-primary "
          href="#contact"
        >
          {t("contact_us")}
        </Link>
      </li>
      <li className="inline-block md:hidden">
        <Link 
          className="text-[13.439px] md:text-[20px] font-normal leading-[144%] text-white hover:text-primary transition-colors duration-500"
          href="https://www.vault-capital.com/legal" target="_blank"
        >
          {t("legal")}
        </Link>
      </li>
    </ul>
  );
}
