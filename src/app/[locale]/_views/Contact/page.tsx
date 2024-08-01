"use client";
import React from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [state, handleSubmit] = useForm("xayrgjnn");

  if (state.succeeded) {
    return (
      <section className="bg-white py-20 text-center">
        <p className="text-green-500 text-[16px] font-normal">{t("success")}</p>
      </section>
    );
  }
  return (
    <section
      id="contact"
      className="relative bg-[F7F8F7] pt-[56px] pb-[165px] md:py-10 xl:py-12 xxl:py-[100px]"
    >
      <div className="container">
        <div className="w-full max-w-[1044px]">
          <p className="text-primary text-[16px] md:text-[20px] font-normal leading-[160%] tracking-[3.4px] mb-[10px] md:mb-[20px] uppercase">
            {t("contact_us")}
          </p>
          <div className="flex flex-col gap-[10px] md:gap-4 lg:gap-5 xl:gap-[24px]">
            <h2 className="text-secondary text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] xxl:text-[50px] font-extrabold md:font-semibold leading-[127%] max-sm:mb-[10px]">
              {t("don_t")}
            </h2>
            <p className="text-secondary text-[14px] md:text-[20px] xl:text-[25px] font-normal leading-[144%] lg:leading-[212%]">
              {t("fill_form")}
              <Link href="mailto:contact@vault.com.mx" className="font-bold">
                contact@vault.com.mx
              </Link>
              {t("as_soon_as_possible")}
            </p>
          </div>
          <div className="mt-5 md:mt-8 lg:mt-[50px] w-full max-w-[898px] ml-auto">
            <form className="flex flex-col gap-[29px]" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  placeholder={t("name")}
                  className="placeholder:text-[#B6B6B6] text-secondary w-full border-[1px] border-[#B6B6B6] rounded-[8px] py-[10px] px-[16px] text-[18px] font-normal leading-[159%] focus:outline-none"
                />
                <ValidationError
                  className="text-red-500 text-base font-normal"
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder={t("email")}
                  minLength={10}
                  maxLength={5000}
                  className="placeholder:text-[#B6B6B6] text-secondary w-full border-[1px] border-[#B6B6B6] rounded-[8px] py-[10px] px-[16px] text-[18px] font-normal leading-[159%] focus:outline-none"
                />
                <ValidationError
                  className="text-red-500 text-base font-normal"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t("content")}
                  className="placeholder:text-[#B6B6B6] text-secondary w-full border-[1px] border-[#B6B6B6] rounded-[8px] py-[10px] px-[16px] text-[18px] font-normal leading-[160%] min-h-[184px] focus:outline-none"
                ></textarea>
                <ValidationError
                  className="text-red-500 text-base font-normal"
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-secondary hover:bg-transparent transition-colors duration-500 border-[1px] border-transparent hover:border-secondary hover:text-secondary text-center rounded-[5px] text-white text-[18px] font-bold leading-[127%] w-full max-w-full sm:max-w-[285px] py-[11px] px-[37px] ml-auto"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
