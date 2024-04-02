import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Kuva from "@/public/images/reettakuvablack.png";

export const metadata: Metadata = {
  title: "Kuvagalleria",
  description: "",
};

import { client } from "@/sanity/lib/client";
import Photogallery from "./page";

export default async function BlogLayout() {
  return (
    <React.Fragment>
      <section className="px-5 md:px-10 mb-10">
        <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-baseline">
          K
          <Image
            src={Kuva}
            alt="demo"
            priority
            aria-hidden="true"
            className="h-[28px] md:h-[clamp(28px,2.5vw,48px)] w-fit object-cover rounded-br-xl rounded-bl-xl mx-1"
          />
          vagalleria.
        </h1>
        <div className="w-full h-[1px] bg-neutral-300 mb-10" />
        <Photogallery />
      </section>
    </React.Fragment>
  );
}
