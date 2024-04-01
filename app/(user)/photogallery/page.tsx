import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { photogalleryQuery } from "@/libs/queries";
import Demo from "@/public/images/reettakuvablack.png";
import PhotogalleryComponents from "@/components/PhotogalleryComponents";

async function photogalleryData() {
  const latestPhotoData = await client.fetch(photogalleryQuery);
  return latestPhotoData;
}

export default async function Photogallery() {
  const data = await photogalleryData();
  return (
    <section className="px-5 md:px-10">
      <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-baseline">
        K
        <Image
          src={Demo}
          alt="demo"
          className="h-[40px] w-fit object-cover rounded-br-xl rounded-bl-xl mx-2"
          priority
        />
        vagalleria.
      </h1>
      <div className="w-full h-[1px] bg-neutral-300 mb-10" />
      <ul className="grid grid-cols-3 gap-4">
        {data.map((photo: any, index: React.Key) => (
          <li key={index} className="">
            <PhotogalleryComponents photo={photo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
