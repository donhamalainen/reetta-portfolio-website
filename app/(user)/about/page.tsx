"use client";

import React, { useEffect, useState } from "react";
import FormComponent from "@/components/FormComponent";
import Image from "next/image";
import Picture from "@/public/images/yhteistiedot.jpg";
export default function about() {
  return (
    <section className="px-5 md:px-10">
      <div className="md:grid md:grid-cols-2 flex flex-col relative gap-10">
        <div className="relative">
          <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText">
            Yhteistiedot.
          </h1>
          <h2 className="py-4 text-[clamp(38px,5vw,48px)] text-black">
            Ihana kuulla, että mielenkiintosi heräsi. Minuun voi olla yhteydessä
            puhelimitse tai sähköpostitse!
          </h2>
          <div className="w-full h-[1px] bg-neutral-300 mb-10" />
        </div>

        <FormComponent />
      </div>
    </section>
  );
}
