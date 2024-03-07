"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import getFinnishTime from "@/hooks/getTime";
import { BsFiletypePdf } from "react-icons/bs";

// ICONS
import { FaLinkedinIn } from "react-icons/fa";

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
      <nav className="flex gap-10 items-center justify-between min-h-[60px]">
        <Link
          href="/"
          className="text-secondary-darkText font-semibold text-lg underline underline-offset-8 col-start-1 col-end-3"
        >
          Reetta Salmela
        </Link>

        <div className="md:block hidden">
          <ul className="flex space-x-4 justify-end items-center">
            <li className="text-secondary-darkText text-lg">
              <Link href="/tyonaytteet">Työnäytteet</Link>
            </li>
            <li className="text-secondary-darkText text-lg">
              <Link href="/yhteistiedot">Yhteistiedot</Link>
            </li>
            <li className="text-secondary-darkText text-lg">
              <Link href="/cv.pdf">Ansioluettelo</Link>
            </li>
            <li className="text-secondary-darkText text-lg flex items-center p-2 border-2 border-secondary-darkText rounded-full">
              <a href="https://www.linkedin.com/in/reettasalmela/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
