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
              alt="Kuva Reetta Salmela OAMK:in portaissa "
              priority
              className="h-[clamp(450px,5vw,60vh)] object-cover object-[60%50%] md:object-center"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary-darkText/20" />
          </div>
        </div>
        <div className="w-full relative overflow-hidden flex flex-row-reverse gap-5">
          <div className="md:w-4/5 flex flex-col justify-between">
            <section>
              <h4 className="mb-5 md:whitespace-nowrap text-[clamp(68px,10vw,140px)] leading-none w-full text-secondary-darkText border-b-2 md:pb-0 pb-5">
                Aidosti raikasta.
              </h4>
              <h1 className="text-[clamp(18px,5vw,24px)] whitespace-pre-line">
                <p className="mb-5">
                  Moikka! Huippua, että olet täällä. Minä olen Reetta Salmela,
                  parikymppinen journalistiopiskelija Oulusta.
                </p>
                <p className="mb-5">
                  Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo
                  nuorena ja olen aina halunnut olla vaikuttajan asemassa. Tästä
                  kertoo pitkä taustani erilaisen yhdistystoiminnan ja
                  opiskelijakuntien jäsenenä.
                </p>
                <p className="mb-5">
                  Luonteeltani olen sosiaalinen ja puhelias. Lapsuuteni olen
                  viettänyt erilaisten pallopelien parissa ja kokemusta
                  tiimeissä toimimisesta löytyy sen ansiosta runsaasti. Innostun
                  asioista helposti ja pyrin toimimaan tehokkaasti edistääkseni
                  niitä.
                </p>
                <p className="mb-5">
                  Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli
                  mielenkiinto heräsi!
                </p>
              </h1>
            </section>

            <div className="flex items-center sm:justify-end gap-2">
              <Link
                href="/yhteistiedot"
                className="text-[clamp(12px,5vw,18px)] bg-secondary-darkText text-white py-2 px-4 mt-10 w-1/2 text-center sm:w-fit"
              >
                Yhteistiedot
              </Link>
              <Link
                href="/yhteistiedot"
                className="text-[clamp(12px,5vw,18px)] bg-secondary-darkText text-white py-2 px-4 mt-10 w-1/2 text-center sm:w-fit"
              >
                Työnäytteet
              </Link>
            </div>
          </div>

          <div className="relative md:block hidden">
            <Image
              src={ReettaImage}
              alt=""
              className="object-cover h-full min-h-[500px] object-[20%50%] lg:object-center"
              priority
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary-darkText/20" />
          </div>
        </div>
      </section>
    </>
  );
}
