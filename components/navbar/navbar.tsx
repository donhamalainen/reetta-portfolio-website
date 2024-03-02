"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationSiteLinks } from "@/libs/navLinks";
import { motion } from "framer-motion";

export default function Navbar() {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const [mobile, setIsMobile] = useState(false);

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

  // RETURN
  return (
    <div className="fixed left-0 right-0 px-5 min-h-14 flex items-center justify-between backdrop-blur-md z-50">
      {/* TITLE */}
      <div className="-z-30">
        <Link
          onClick={() => setIsMobile(false)}
          href="/"
          className="text-secondary-darkText bg-primary-secondBackground leading-none rounded-full py-2 px-4 font-author"
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
                    ? "text-secondary-darkText flex justify-center items-center w-10 h-10 bg-primary-secondBackground rounded-full "
                    : "text-secondary-darkText"
                }`}
                onClick={() => setIsMobile(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
        {/* MODE & HAM */}
        <div className="">
          <button onClick={toggleMobileMenu} className="md:hidden">
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 transform transition-transform duration-300 ease-in-out ${
                  mobile
                    ? "rotate-45 translate-y-1.5 bg-secondary-darkText"
                    : " bg-secondary-darkText"
                }`}
              />
              <span
                className={`block w-8 h-0.5  transform transition-transform duration-300 ease-in-out ${
                  mobile
                    ? "-rotate-45 -translate-y-1 bg-secondary-darkText"
                    : "bg-secondary-darkText"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBIILI NAV */}
      {mobile && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backdropVariants}
          className="absolute top-0 right-0 left-0 w-full h-screen bg-primary-secondBackground md:hidden -z-10"
        >
          <div className="text-xl h-full grid grid-rows-2 text-center">
            <nav className="row-start-1 flex flex-col justify-end gap-5">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={listVariants}
                className="space-y-4"
              >
                {navigationSiteLinks.links.map((item, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <Link
                      href={`${item.href}`}
                      className="block px-4 py-2 text-secondary-darkText font-author cursor-pointer"
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
