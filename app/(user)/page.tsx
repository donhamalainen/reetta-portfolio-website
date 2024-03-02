"use client";
import Image from "next/image";
import { homeText } from "@/libs/homeText";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import DefaultImage from "@/public/images/reetta.jpg";
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
      <div
        aria-hidden
        className="absolute -right-20 top-0 rounded-full h-1/2 w-1/2 bg-[#F4538A] blur-[clamp(100px,15vw,380px)]"
      />
      <section className="w-full relative">
        {/* HEADER */}
        <div className="relative w-full">
          <Image
            src={DefaultImage}
            alt="Reetta"
            priority
            className="w-full h-[500px] object-cover rounded-xl z-10"
          />
          <div className="absolute h-full w-full bg-secondary-darkText/40 top-0 left-0 right-0 bottom-0 rounded-xl" />
          <div className="grid grid-cols-3 gap-10 absolute left-10 bottom-5 right-10">
            <div className="col-span-2">
              <span>
                Olen Reetta Salmela, sosiaalinen ja puhelias parikymppinen
                journalistiopiskelija Oulusta. Lapsuuteni on ollut täynnä
                erilaisia pallopelejä, jotka opettivat minulle tiimityöskentelyn
                arvon. Innostun helposti ja pyrin toimimaan tehokkaasti asioita
                edistääkseni.
              </span>
            </div>
            <div className="xl:text-9xl text-right text-primary-secondBackground mix-blend-soft-light">
              <span>Aidosti raikasta.</span>
            </div>
          </div>
        </div>
        {/* HEADER */}
      </section>
    </main>
  );
}
