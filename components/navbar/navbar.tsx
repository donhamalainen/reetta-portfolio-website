"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { navigationSiteLinks } from "@/libs/navLinks";
import { motion, Variants } from "framer-motion";

export default function Navbar() {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [mobile, setIsMobile] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  // Tätä funktiota käytetään mobiilivalikon tilan vaihtamiseen
  const toggleMobileMenu = () => {
    setIsMobile(!mobile);
  };

  /*
   Mikäli leveys ylittää 640px ja muuttuja mobile on true, niin tehdään tarkistus että skaalautuuko 
   näkymä uudelleen jolloin suljetaan mobiili näkymä 
   */
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
  return (
    <div className="fixed left-0 right-0 px-5 min-h-14 flex items-center justify-between bg-transparent backdrop-blur-md">
      {/* TITLE */}
      <div className="-z-30">
        <Link
          onClick={() => setIsMobile(false)}
          href="/"
          className="text-primary-dark dark:text-primary-light border-primary-dark dark:border-primary-light border-2 leading-none rounded-full py-2 px-4 font-author"
        >
          Reetta Salmela
        </Link>
      </div>
      {/* NAV & MODE */}
      <div className="flex gap-5">
        {/* NAV */}
        <div>
          <nav className="hidden md:flex space-x-2 items-center">
            {navigationSiteLinks.links.map((item, i) => (
              <Link
                key={i}
                href={`${item.href}`}
                className={`block px-4 py-2 font-author cursor-pointer ${
                  item.text === "CV"
                    ? "text-primary-dark dark:text-primary-light flex justify-center items-center w-10 h-10 border-solid border-2 border-primary-dark dark:border-primary-light rounded-full "
                    : "text-primary-dark dark:text-primary-light"
                }`}
                onClick={() => setIsMobile(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
        {/* MODE & HAM */}
        <div className="flex flex-row-reverse gap-5">
          <button onClick={toggleMobileMenu} className="md:hidden">
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 transform transition-transform duration-300 ease-in-out ${
                  mobile
                    ? "rotate-45 translate-y-1.5 bg-primary-light dark:bg-primary-dark"
                    : "bg-primary-dark dark:bg-primary-light"
                }`}
              />
              <span
                className={`block w-8 h-0.5  transform transition-transform duration-300 ease-in-out ${
                  mobile
                    ? "-rotate-45 -translate-y-1 bg-primary-light dark:bg-primary-dark"
                    : "bg-primary-dark dark:bg-primary-light"
                }`}
              />
            </div>
          </button>
          <button
            onClick={() =>
              theme == "dark" ? setTheme("ligth") : setTheme("dark")
            }
            className={`${
              mobile
                ? "text-primary-light dark:text-primary-dark"
                : "text-primary-dark dark:text-primary-light"
            }`}
          >
            <RiMoonClearFill size={20} className="dark:hidden" />
            <IoIosSunny size={20} className="hidden dark:block" />
          </button>
        </div>
      </div>

      {/* MOBIILI NAV */}
      {mobile && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backdropVariants}
          className="absolute top-0 right-0 left-0 w-full h-screen bg-primary-dark dark:bg-primary-light md:hidden -z-10"
        >
          <div className="text-xl h-full grid grid-rows-2 text-center">
            <nav className="row-start-1 flex flex-col justify-end gap-5">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={listVariants}
                className=" space-y-4"
              >
                {navigationSiteLinks.links.map((item, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <Link
                      href={`${item.href}`}
                      className="block px-4 py-2 text-primary-light dark:text-primary-dark font-author cursor-pointer"
                      onClick={() => setIsMobile(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
}
