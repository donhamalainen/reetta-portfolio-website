"use client";

import React, { useEffect, useState } from "react";
import getFinnishTime from "@/hooks/getTime";
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
      <div className="md:grid md:grid-cols-2 relative">
        <h2 className="text-[11.5rem] leading-none font-bold text-secondary-darkText">
          Yhteistiedot.
        </h2>
      </div>
    </section>
  );
}
