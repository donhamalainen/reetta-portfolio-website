import React from "react";
import Image from "next/image";
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
      className="py-5 grid grid-cols-4 gap-4 cursor-pointer border-b-2"
    >
      <div className="col-start-1 col-end-5 sm:col-end-4 flex flex-col justify-between space-y-5">
        <div className="space-y-2">
          <h4 className="text-xl font-bold">{otsikko}</h4>
          <p className="text-lg">{teksti}</p>
        </div>

        <p>{slug}</p>
      </div>
      <div className="h-full min-h-[200px] max-h-[300px] w-full relative col-start-4 col-span-4 sm:block hidden">
        {(kuva && (
          <Image
            src={urlForImage(kuva)}
            fill
            priority
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-right-bottom"
          />
        )) ||
          null}
      </div>
    </a>
  );
}
