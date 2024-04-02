"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Kuva from "@/public/images/reettakuvablack.png";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="px-5 md:px-10">
      <div className="pb-5 border-b-2">
        <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10">
          Työnäytteet.
        </h1>
        <h2 className="text-[clamp(18px,5vw,38px)]">
          <p>
            Tällä sivulla pääset tutustumaan työnäytteisiini. Kokemusta ja
            näytteitä on kertynyt niin opintojen, kuin kesätöidenkin ajalta.
            Olethan yhteydessä minuun, mikäli haluat nähdä lisää!
          </p>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 mt-10 gap-5">
        <Link
          className="h-[250px] bg-secondary-lightText/50 relative"
          href="/juttunaytteet"
          prefetch
        >
          <h4 className="flex justify-center items-center h-full text-[clamp(18px,5vw,28px)]">
            Juttunäytteet
          </h4>
          <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
            <Image src={Kuva} alt="" className="h-full w-full object-cover" />
          </div>
        </Link>

        <Link
          className="h-[250px] bg-secondary-lightText/50 relative"
          href="/projektit"
          prefetch
        >
          <h4 className="flex justify-center items-center h-full text-[clamp(18px,5vw,28px)]">
            Projektit
          </h4>
          <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
            <Image src={Kuva} alt="" className="h-full w-full object-cover" />
          </div>
        </Link>

        <motion.div className="h-[250px] bg-secondary-darkText/60 relative cursor-pointer">
          <Link href="/kuvagalleria" prefetch>
            <h4 className="flex justify-center items-center h-full text-primary-background text-[clamp(18px,5vw,28px)]">
              Kuvagalleria
            </h4>

            <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
              <Image
                src={urlForImage(photogallery.kuva.asset)}
                alt=""
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
