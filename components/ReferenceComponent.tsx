"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";
export default function ReferenceComponent({
  otsikko,
  slug,
  description,
  index,
  image,
}: {
  otsikko: string;
  slug: string;
  description: string | null;
  index: number;
  image: any;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className="relative overflow-hidden">
      {/* HEADER */}
      <div
        className="border-b-2 py-2 cursor-pointer"
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="grid grid-cols-[0.5fr,2fr,auto] gap-5 items-center">
          <p className="text-xl">{index}.</p>
          <h3 className="text-left text-xl">{otsikko}</h3>
          <p className="text-right flex items-end text-lg">
            Lue
            {isHovered ? (
              <MdOutlineKeyboardArrowRight
                size={24}
                className="rotate-90 duration-500"
              />
            ) : (
              <MdOutlineKeyboardArrowRight size={24} className="duration-500" />
            )}
          </p>
        </div>
      </div>

      {/* DESC */}
      <motion.div
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={
          isHovered
            ? {
                opacity: 1,
                maxHeight: "600px",
                transition: { duration: 0.4, ease: "backIn" },
              }
            : {}
        }
        className="overflow-hidden w-full"
      >
        <div className="grid sm:grid-cols-3 justify-between gap-5 sm:gap-10 py-2">
          <div className="col-start-1 sm:col-end-3 flex flex-col justify-between space-y-4">
            <div className="space-y-5 sm:space-y-2">
              <h4 className="text-md md:text-lg font-bold">Kuvaus</h4>
              <p className="text-neutral-600 text-xl">{description}</p>
            </div>
            <div>
              <h4 className="text-md md:text-lg mb-5 sm:mb-2 font-bold">
                Linkki
              </h4>
              <a className="text-lg" href={slug}>
                {slug}
              </a>
            </div>
          </div>
          <div className="relative w-full h-[200px] sm:h-[250px]">
            <Image
              src={urlForImage(image)}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
