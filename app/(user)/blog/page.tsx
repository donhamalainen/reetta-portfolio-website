"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Kuva from "@/public/images/reettakuvablack.png";

export default function Blog() {
  const [photoGallery, setPhotoGallery] = useState([]);
  useEffect(() => {
    async function getPhotoGallery() {
      const query = `*[_type == "kuvagalleria"][0]`;
      try {
        const data = await client.fetch(query);
        setPhotoGallery(data);
      } catch (error) {
        console.error("Failed to fetch CV data from Database", error);
      }
    }
    getPhotoGallery();
  }, []);
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
        >
          <h4 className="flex justify-center items-center h-full text-[clamp(18px,5vw,28px)]">
            Projektit
          </h4>
          <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
            <Image src={Kuva} alt="" className="h-full w-full object-cover" />
          </div>
        </Link>

        <Link
          className="h-[250px] bg-secondary-lightText/50 relative"
          href="/kuvagalleria"
        >
          <h4 className="flex justify-center items-center h-full text-[clamp(18px,5vw,28px)]">
            Kuvagalleria
          </h4>
          <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
            <Image src={Kuva} alt="" className="h-full w-full object-cover" />
          </div>
        </Link>
      </div>
    </section>
  );
}
