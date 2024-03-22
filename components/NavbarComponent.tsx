"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ICONS
import { FaLinkedinIn } from "react-icons/fa";
import getFinnishTime from "@/hooks/getTime";
import getSanityCVData from "@/hooks/getSanityCVData";

export default function Navbar() {
  // Attributes
  const [cvUrlLoading, setCvUrlLoading] = useState(false);
  const [cvUrl, setCvUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [time, setTime] = useState("--------");

  useEffect(() => {
    async function getDataFromHookSanity() {
      setCvUrlLoading(true);
      try {
        const data = await getSanityCVData();
        setCvUrl(data);
        setCvUrlLoading(false);
      } catch (error) {
        console.error(error + " Failed to fetch data from Sanity");
        setCvUrlLoading(false);
      }
    }
    getDataFromHookSanity();
  }, []);

  // SCROLL STOPPER
  useEffect(() => {
    const scrollStopper = () => {
      document.body.style.overflow = isMobile ? "hidden" : "auto";
    };

    return scrollStopper();
  }, [isMobile]);
  // TIME
  useEffect(() => {
    const intervalID = setInterval(() => {
      const intervalTime = getFinnishTime();
      setTime(intervalTime);
    }, 500);
    return () => clearInterval(intervalID);
  });
  // CHECK WIDTH
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        console.log("Ylitti");
      }
    };
    if (isMobile) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => window.removeEventListener("resize", handleResize);
  });
  // RETURN
  return (
    <header id="header" className="px-10 py-2 mb-5">
      <div className="flex gap-10 items-center justify-between min-h-[60px]">
        <Link
          onClick={() => setIsMobile(false)}
          href="/"
          className="text-secondary-darkText font-semibold text-lg underline underline-offset-8 col-start-1 col-end-3 z-50"
        >
          Reetta Salmela
        </Link>

        <nav className="md:block hidden">
          <ul className="flex space-x-4 justify-end items-center">
            <li className="text-secondary-darkText text-lg">
              <Link href="/tyonaytteet">Työnäytteet</Link>
            </li>
            <li className="text-secondary-darkText text-lg">
              <Link href="/yhteistiedot">Yhteistiedot</Link>
            </li>

            {cvUrlLoading ? (
              <p>Haetaan ansioluetteloa...</p>
            ) : cvUrl == null ? (
              <></>
            ) : (
              <li className="text-secondary-darkText text-lg">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`${cvUrl}`}
                >
                  Ansioluettelo
                </Link>
              </li>
            )}

            <li className="text-secondary-darkText text-lg flex items-center p-2 border-2 border-secondary-darkText rounded-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/reettasalmela/"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMobile(!isMobile)}
          className="md:hidden cursor-pointer z-50 h-[24px]"
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 transform transition-transform duration-300 ease-in-out ${
                isMobile
                  ? "rotate-45 translate-y-1.5 bg-secondary-darkText"
                  : " bg-secondary-darkText"
              }`}
            />
            <span
              className={`block w-8 h-0.5  transform transition-transform duration-300 ease-in-out ${
                isMobile
                  ? "-rotate-45 -translate-y-1 bg-secondary-darkText"
                  : "bg-secondary-darkText"
              }`}
            />
          </div>
        </button>

        {isMobile && (
          <>
            <div
              aria-label="hidden"
              className="fixed left-0 bottom-0 top-0 right-0 backdrop-blur-2xl bg-transparent z-40 w-full h-full"
            >
              <ul className="h-full w-full relative grid grid-rows-4 pt-20">
                <li className="text-black text-4xl flex justify-center items-center">
                  <Link onClick={() => setIsMobile(false)} href="/tyonaytteet">
                    Työnäytteet
                  </Link>
                </li>
                <li className="text-black text-4xl flex justify-center items-center">
                  <Link onClick={() => setIsMobile(false)} href="/yhteistiedot">
                    Yhteistiedot
                  </Link>
                </li>

                {cvUrlLoading ? (
                  <p>Haetaan ansioluetteloa...</p>
                ) : cvUrl == null ? (
                  <></>
                ) : (
                  <li className="text-black text-4xl flex justify-center items-center">
                    <Link
                      onClick={() => setIsMobile(false)}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`${cvUrl}`}
                    >
                      Ansioluettelo
                    </Link>
                  </li>
                )}
                <p
                  aria-label="hidden"
                  className="absolute left-5 bottom-5 text-[clamp(48px,10vw,60px)] italic"
                >
                  {time}
                </p>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
