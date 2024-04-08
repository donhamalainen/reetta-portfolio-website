"use client";

import React from "react";
import ContactCardComponent from "@/components/ContactCardComponent";
export default function About({ aboutData }: any) {
  return (
    <section className="px-5 md:px-10">
      <div className="flex flex-col relative gap-10">
        <div className="relative">
          <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText">
            Yhteystiedot.
          </h1>
          <h2 className="py-4 text-[clamp(20px,5vw,48px)] text-black">
            Ihana kuulla, että mielenkiintosi heräsi. Minuun voi olla yhteydessä
            puhelimitse tai sähköpostitse!
          </h2>
          <div className="w-full h-[1px] bg-neutral-300 mb-10" />
        </div>

        <ContactCardComponent data={aboutData} />
      </div>
    </section>
  );
}
