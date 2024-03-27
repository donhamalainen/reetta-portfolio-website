import React from "react";
import Image from "next/image";

import Demo from "@/public/images/reettakuvablack.png";
export default function Photogallery() {
  return (
    <section className="px-5 md:px-10">
      <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-center">
        K
        <Image
          src={Demo}
          alt="demo"
          className="h-[60px] w-fit object-cover rounded-br-xl rounded-bl-xl mx-2"
        />
        vagalleria.
      </h1>
      <div className="w-full h-[1px] bg-neutral-300 mb-10" />
    </section>
  );
}
