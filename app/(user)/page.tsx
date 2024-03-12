"use client";
import Image from "next/image";
import Link from "next/link";
import { homeText } from "@/libs/homeText";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PortableText } from "@portabletext/react";
import getFinnishTime from "@/hooks/getTime";

// DEFAULT IMAGEAS
import section_oneImage from "@/public/images/headerPic.jpg";
import ReettaImage from "@/public/images/reettakuvablack.png";

export default function Home() {
  // Attributes
  const [time, setTime] = useState<String>("----------");
  // Methods

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
    <>
      <section className="px-10 h-full mb-10">
        <div className="flex mb-5">
          <div className="relative lg:col-start-1 lg:col-end-12">
            <Image
              src={section_oneImage}
              alt="Kuva Reetta Salmela OAMK:in portaissa"
              priority
              className="h-[clamp(450px,5vw,60vh)] object-cover"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary-darkText/20" />
          </div>
        </div>
        <div className="w-full relative overflow-hidden flex flex-row-reverse gap-5">
          <div className="md:w-4/5 h-fit">
            <h2 className="mb-10 md:whitespace-nowrap text-[5rem] lg:text-[7rem] xl:text-[10rem] m-0 leading-none w-full text-secondary-darkText">
              Aidosti raikasta.
            </h2>
            <h1 className="text-4xl">Moikka! Huippua, että olet täällä.</h1>
            <p className="text-base md:text-xl mt-5">
              Minä olen Reetta Salmela, parikymppinen journalistiopiskelija
              Oulusta.
              <br />
              Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo nuorena
              ja olen aina halunnut olla vaikuttajan asemassa. Tästä kertoo
              pitkä taustani erilaisen yhdistystoiminnan ja opiskelijakuntien
              jäsenenä.
              <br />
              Luonteeltani olen sosiaalinen ja puhelias. Lapsuuteni olen
              viettänyt erilaisten pallopelien parissa ja kokemusta tiimeissä
              toimimisesta löytyy sen ansiosta runsaasti. Innostun asioista
              helposti ja pyrin toimimaan tehokkaasti edistääkseni niitä.
              <br />
              Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli
              mielenkiinto heräsi!
            </p>
          </div>

          <div className="relative md:block hidden">
            <Image
              src={ReettaImage}
              alt=""
              className="object-cover h-full min-h-[500px]"
              priority
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary-darkText/20" />
          </div>
        </div>
      </section>
    </>
  );
}
