"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Kuva from "@/public/images/reettakuvablack.png";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

export default function Blog({ data = [] }: any) {
  return (
    <section className="px-5 md:px-10 mb-10">
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

      <div className="grid md:grid-cols-3 mt-10 gap-5 overflow-hidden">
        <div aria-hidden className="overflow-hidden">
          <motion.div
            initial={{ y: "500px" }}
            animate={{
              transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
              y: 0,
            }}
          >
            <Link href="/kuvagalleria" className="relative cursor-pointer">
              <div className="h-[400px] bg-secondary-darkText/60">
                <p className="flex justify-center items-center h-full text-primary-background text-[clamp(18px,5vw,28px)]">
                  Kuvagalleria
                </p>

                <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
                  <Image
                    src={
                      data.latestNewsData
                        ? urlForImage(data.latestPhotoData.kuva.asset)
                        : Kuva
                    }
                    alt="Kuvagallerian kansikuva"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div aria-hidden className=" overflow-hidden">
          <motion.div
            initial={{ y: "500px" }}
            animate={{
              transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.8 },
              y: 0,
            }}
          >
            <Link href="/juttunaytteet" className="relative cursor-pointer">
              <div className="h-[400px] bg-secondary-darkText/60">
                <p className="flex justify-center items-center h-full text-primary-background text-[clamp(18px,5vw,28px)]">
                  Juttunäytteet
                </p>

                <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
                  <Image
                    src={
                      data.latestNewsData
                        ? urlForImage(data.latestNewsData.juttunayteKuva.asset)
                        : Kuva
                    }
                    alt="Kuvagallerian kansikuva"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div aria-hidden className=" overflow-hidden">
          <motion.div
            initial={{ y: "500px" }}
            animate={{
              transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1.1 },
              y: 0,
            }}
          >
            <Link href="/projektit" className="relative cursor-pointer">
              <div className="h-[400px] bg-secondary-darkText/60">
                <p className="flex justify-center items-center h-full text-primary-background text-[clamp(18px,5vw,28px)]">
                  Projektit
                </p>

                <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
                  <Image
                    src={
                      data.latestProject
                        ? urlForImage(data.latestProject.projectImage.asset)
                        : Kuva
                    }
                    alt="Projektisivun kansikuva"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
