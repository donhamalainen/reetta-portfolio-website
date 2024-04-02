"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

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
export default function PhotogalleryComponents({ photo }: { photo: any }) {
  const [isClicked, setIsClicked] = useState(false);
  const { width, height } = parseImageDimensions(photo.kuva.asset._ref);
  const isVertical = height > width; // Onko kuva pystysuuntainen
  return (
    <li
      className={`relative h-[350px] md:h-[250px] w-full cursor-pointer col-span-3 md:row-span-1 ${
        isVertical ? "md:row-span-2 h-full" : ""
      }`}
      onClick={() => setIsClicked(true)}
    >
      <Image
        src={urlForImage(photo.kuva.asset)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-full w-full object-cover md:object-cover"
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
            />
          </div>
        </div>
      )}
    </li>
  );
}
