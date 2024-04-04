"use client";

import React, { useState } from "react";
import Image from "next/image";
import DefaultKuva from "@/public/images/reettakuvablack.png";

import { motion } from "framer-motion";
export default function ReferenceComponent({
  otsikko,
  slug,
  description,
  index,
}: {
  otsikko: string;
  slug: string;
  description: string | null;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onClick={() => setIsHovered(!isHovered)}
      className="relative overflow-hidden cursor-pointer"
    >
      {/* HEADER */}
      <div className="border-b-2 py-2">
        <div className="grid grid-cols-[1fr,2fr,auto] gap-5 items-center ">
          <p>{index}</p>
          <h3 className="text-left">{otsikko}</h3>
          <p className="text-right px-3 py-1 border-[1px] rounded-full">
            Lue juttunäyte
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
        className="overflow-hidden"
      >
        <div className="grid sm:grid-cols-2 justify-between gap-10 py-2">
          <div className="col-start-1 col-end-3 space-y-4">
            <h4 className="text-md md:text-lg">Seloste</h4>
            <p className="text-neutral-600 text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
