"use client";
import Image from "next/image";
import { homeText } from "@/libs/homeText";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import DefaultImage from "@/public/images/headerPic.jpg";
import ReettaImage from "@/public/images/reetta.png";
export default function Home() {
  // Attributes
  const [referenceIndex, setReferenceIndex] = useState(0);
  const imageTextRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setReferenceIndex((prevIndex) => (prevIndex + 1) % homeText.text.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [homeText.text.length]);

  useEffect(() => {
    gsap.fromTo(
      imageTextRef,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "none" }
    );
  }, [referenceIndex]);

  // RETURN
  return (
    <main className="px-5 pt-20 relative overflow-hidden">
      <section className="w-full relative mb-20">
        {/* HEADER */}
        <div className="relative w-full">
          <Image
            src={DefaultImage}
            alt="Reetta"
            priority
            loading="eager"
            className="w-full h-[500px] object-cover rounded-xl z-10"
          />
          <div className="absolute h-full w-full bg-secondary-darkText/40 top-0 left-0 right-0 bottom-0 rounded-xl" />
          <div className="absolute bottom-5 right-10 items-end">
            <span className="xl:text-9xl text-right text-primary-secondBackground mix-blend-soft-light items-end font-author">
              Aidosti raikasta.
            </span>
          </div>
        </div>
      </section>
      {/* HEADER */}
      <section className="h-screen">
        <div className="retlative">
          <Image
            src={ReettaImage}
            alt="Reetta"
            className="h-[450px] w-max object-contain bg-primary-secondBackground rounded-full"
          />
          <h1 className="col-span-2"></h1>
        </div>
      </section>
    </main>
  );
}
