"use client";

import React, { Key, useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

function parseImageDimensions(ref: string) {
  // Etsi kuvaformaatti merkkijonosta: "-leveysxkorkeus.jpg"
  const regex = /-(\d+)x(\d+)/;
  const matches = ref.match(regex);

  if (matches) {
    const width = parseInt(matches[1], 10);
    const height = parseInt(matches[2], 10);
    return { width, height };
  }

  // Oletusarvot, jos mittoja ei löydy: oletetaan vaakasuuntainen kuva
  return { width: 1, height: 0 }; // Width on suurempi kuin height, joten kuvan katsotaan olevan vaakasuuntainen
}
export default function PhotogalleryComponents({
  photo,
  photoIndex,
}: {
  photo: any;
  photoIndex: any;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const { width, height } = parseImageDimensions(photo.kuva.asset._ref);
  const isVertical = height > width; // Onko kuva pystysuuntainen
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 * photoIndex } }}
      className={`relative h-[250px] w-full cursor-pointer row-span-1 ${
        isVertical ? "sm:row-span-2 sm:h-full" : ""
      }`}
      onClick={() => setIsClicked(true)}
    >
      <Image
        src={urlForImage(photo.kuva.asset)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-full w-full object-cover"
        priority
      />
      {isClicked && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={(e) => {
            e.stopPropagation(); // Estä klikkaustapahtuman leviäminen
            setIsClicked(false);
          }}
        >
          <div className="relative h-[80vw] w-[80vh] md:h-[80vh] md:w-[80vw] cursor-pointer">
            <Image
              src={urlForImage(photo.kuva.asset)}
              alt=""
              fill
              className="object-contain h-full w-full"
              priority
            />
          </div>
        </div>
      )}
    </motion.li>
  );
}
