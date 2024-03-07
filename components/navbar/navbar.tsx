"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import getFinnishTime from "@/hooks/getTime";
import { BsFiletypePdf } from "react-icons/bs";

export default function Navbar() {
  // Attributes
  const [mobile, setIsMobile] = useState(false);
  const [time, setTime] = useState<String>("----------");

  // Methods
  const toggleMobileMenu = () => {
    setIsMobile(!mobile);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        console.log("Ylitti");
      }
    };

    if (mobile) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => window.removeEventListener("resize", handleResize);
  });

  // TIME
  useEffect(() => {
    const intervalID = setInterval(() => {
      const intervalTime = getFinnishTime();
      setTime(intervalTime);
    }, 500);
    return () => clearInterval(intervalID);
  });

  // RETURN
  return (
    <header id="header" className="px-10 py-2 mb-5">
      <nav className="grid grid-cols-12 gap-10 lg:gap-2 items-center justify-between min-h-[60px]">
        <Link
          href="/"
          className="text-secondary-darkText font-semibold text-lg underline underline-offset-8 col-start-1 col-end-3"
        >
          Reetta Salmela
        </Link>

        <div className="md:block hidden col-start-6 col-end-12">
          <ul className="flex space-x-4 justify-end">
            <li className="text-secondary-darkText text-lg">
              <Link href="/tyonaytteet">Työnäytteet</Link>
            </li>
            <li className="text-secondary-darkText text-lg">
              <Link href="/yhteistiedot">Yhteistiedot</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex justify-end">
          <Link
            className="w-max text-2xl border-2 border-secondary-darkText/40 text-secondary-darkText/40 rounded-full p-2 hover:text-secondary-darkText hover:border-secondary-darkText transition duration-300"
            href="/cv.pdf"
          >
            <BsFiletypePdf />
          </Link>
        </div>
      </nav>
    </header>
  );
}
