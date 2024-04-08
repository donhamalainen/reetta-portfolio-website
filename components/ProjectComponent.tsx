import React from "react";
import Image from "next/image";

import Kuva from "@/public/images/reettakuvablack.png";
import { urlForImage } from "@/sanity/lib/image";
export default function ProjectComponent({
  otsikko,
  teksti,
  kuva,
  slug,
}: {
  otsikko: string;
  teksti: string;
  kuva: any;
  slug: string;
}) {
  return (
    <a
      href={slug}
      target="_blank"
      className="py-5 grid grid-cols-4 gap-4 cursor-pointer"
    >
      <div className="border-b-2 col-start-1 col-end-5 space-y-4">
        <h4 className="text-xl font-bold">{otsikko}</h4>
        <p className="text-lg">{teksti}</p>
      </div>
      <div className="md:h-[150px] md:w-[100px] h-[400px] w-full relative md:col-start-5 row-start-1 col-span-4">
        <Image src={urlForImage(kuva)} fill alt="" className="object-cover" />
      </div>
    </a>
  );
}
