import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactCardComponent({ data }: any) {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:h-[150px] h-[300px] shadow-2xl border-2 border-white backdrop-blur-2xl">
      <a
        className="flex items-center text-[clamp(14px,5vw,28px)] md:text-2xl justify-center gap-4 cursor-pointer md:border-r-2 border-b-2 md:border-b-0 border-white text-secondary-darkText"
        href={`tel:${data.phone}`}
      >
        <HiOutlineDevicePhoneMobile />
        <h5>{data.phone}</h5>
      </a>
      <a
        className="flex items-center text-[clamp(14px,5vw,28px)] md:text-2xl justify-center gap-4 cursor-pointer text-secondary-darkText"
        href={`mailto:${data.mail}`}
      >
        <HiOutlineMail />
        <h5>{data.mail}</h5>
      </a>
    </div>
  );
}
