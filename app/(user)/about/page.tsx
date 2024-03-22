"use client";

import React, { useEffect, useState } from "react";
import getFinnishTime from "@/hooks/getTime";
import FormComponent from "@/components/FormComponent";
export default function about() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalID = setInterval(() => {
      const intervalTime = getFinnishTime();
      setTime(intervalTime);
    }, 500);
    return () => clearInterval(intervalID);
  });
  return (
    <section className="px-10">
      <div className="md:grid md:grid-cols-2 flex flex-col relative gap-10">
        <div>
          <h2 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText">
            Yhteistiedot.
          </h2>
          <p className="py-4 text-[clamp(38px,5vw,48px)]">
            Olen iloinen, että olette kiinnostunut ottamaan minuun yhteyttä.
          </p>
          <div className="w-full h-[1px] bg-neutral-300" />
        </div>

        <FormComponent />
      </div>
    </section>
  );
}
