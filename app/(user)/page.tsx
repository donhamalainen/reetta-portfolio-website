"use client";
import Image from "next/image";
import { homeText } from "@/libs/homeText";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PortableText } from "@portabletext/react";

// DEFAULT IMAGEAS
import DefaultImage from "@/public/images/headerPic.jpg";
import ReettaImage from "@/public/images/reettakuva.png";

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
            className="w-full h-[calc(100vh-160px)] object-cover rounded-xl z-10"
          />
          <div className="absolute h-full w-full bg-secondary-darkText/40 top-0 left-0 right-0 bottom-0 rounded-xl" />
          <div className="absolute text-right left-5 bottom-5 right-5 md:bottom-5 md:right-10 md:left-10 md:items-end">
            <span className="text-[clamp(46px,10vw,96px)] md:text-8xl lg:text-9xl text-right text-primary-secondBackground mix-blend-soft-light items-end font-authorItalic">
              Aidosti raikasta.
            </span>
          </div>
        </div>
      </section>
      {/* HEADER */}
      <section className="h-screen">
        <div className="relative flex gap-20">
          <Image
            src={ReettaImage}
            alt="Reetta"
            className="h-[450px] w-1/2 object-contain rounded-xl"
          />
          <h1 className="text-3xl border-2 border-black rounded-xl p-5">
            Moikka! Huippua, että olet täällä. <br />
            Minä olen Reetta Salmela, parikymppinen journalistiopiskelija
            Oulusta. Tällä sivustolla pääset tutustumaan työnäytteisiini, sekä
            -historiaani. <br />
            Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo nuorena ja
            olen aina halunnut olla vaikuttajan asemassa. Tästä kertoo pitkä
            taustani erilaisen yhdistystoiminnan ja opiskelijakuntien jäsenenä.
            <br />
            Luonteeltani olen sosiaalinen ja puhelias. Lapsuuteni olen viettänyt
            erilaisten pallopelien parissa ja kokemusta tiimeissä toimimisesta
            löytyy sen ansiosta runsaasti. Innostun asioista helposti ja pyrin
            toimimaan tehokkaasti edistääkseni niitä.
            <br />
            Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli
            mielenkiinto heräsi!
          </h1>
        </div>
      </section>
    </main>
  );
}
