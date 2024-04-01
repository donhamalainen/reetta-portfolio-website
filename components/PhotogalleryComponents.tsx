import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
export default function PhotogalleryComponents({ photo }: { photo: any }) {
  return (
    <Image
      src={urlForImage(photo.kuva.asset)}
      alt=""
      width={350}
      height={250}
      quality={75}
      blurDataURL="@/public/images/yhteistiedot.jpg"
      placeholder="blur"
      className="w-full h-full object-contain aspect-square"
    />
  );
}
