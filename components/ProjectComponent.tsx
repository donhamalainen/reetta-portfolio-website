import React from "react";
import Image from "next/image";

import Kuva from "@/public/images/reettakuvablack.png";
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
      className="border-b-2 py-2 grid grid-cols-6 gap-4 h-full max-h-[150px] cursor-pointer"
    >
      <h4 className="text-xl font-semibold col-start-1 col-end-3">FAX-lehti</h4>
      <p className="col-start-3 col-end-6">
        Koulutyönä toteutettu nuortenlehti FAX. Toimin lehden päätoimittajana.
      </p>
      <div className="h-full w-full">
        <Image
          src={Kuva}
          alt=""
          className="object-cover col-start-6 col-end-7 h-full w-full"
        />
      </div>
    </a>
  );
}
