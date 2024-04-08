"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import getFinnishTime from "@/hooks/getTime";
import { motion } from "framer-motion";
import TextSplitterReveal from "@/hooks/textSplitterReveal";
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
      <section className="px-5 md:px-10 h-full mb-10">
        <div className="flex mb-5">
          <div className="relative lg:col-start-1 lg:col-end-12 overflow-hidden">
            <Image
              src={section_oneImage}
              alt="Kuva Reetta Salmela OAMK:in portaissa "
              priority
              className="h-[clamp(450px,5vw,60vh)] object-cover object-[60%50%] md:object-center"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary-darkText/20" />
            <p className="absolute right-5 bottom-5 text-neutral-600 border-neutral-600 text-xs">
              Kuva: Miika Yliniemelä
            </p>
          </div>
        </div>
        <div className="w-full relative overflow-hidden flex flex-row-reverse gap-10">
          <div className="md:w-4/5 flex flex-col justify-between">
            <section>
              <h1 className="mb-5 md:whitespace-nowrap text-[clamp(50px,10vw,140px)] leading-none w-full text-secondary-darkText border-b-2 md:pb-0 pb-5">
                Aidosti raikasta.
              </h1>
              <motion.h2 className="text-[clamp(18px,5vw,24px)] whitespace-pre-line space-y-5">
                <p>
                  Moikka! Huippua, että olet täällä. Minä olen Reetta Salmela,
                  parikymppinen journalistiopiskelija Oulusta.
                </p>
                <p>
                  Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo
                  nuorena ja olen aina halunnut olla vaikuttajan asemassa. Tästä
                  kertoo pitkä taustani erilaisen yhdistystoiminnan ja
                  opiskelijakuntien jäsenenä.
                </p>
                <p>
                  Luonteeltani olen sosiaalinen ja puhelias. Lapsuuteni olen
                  viettänyt erilaisten pallopelien parissa ja kokemusta
                  tiimeissä toimimisesta löytyy sen ansiosta runsaasti. Innostun
                  asioista helposti ja pyrin toimimaan tehokkaasti edistääkseni
                  niitä.
                </p>
                <p>
                  Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli
                  mielenkiinto heräsi!
                </p>
              </motion.h2>
            </section>

            <div className="flex items-center sm:justify-end gap-2">
              <Link
                href="/yhteistiedot"
                className="text-[clamp(12px,5vw,18px)] bg-secondary-darkText text-white py-2 px-4 mt-10 w-1/2 text-center sm:w-fit"
              >
                Yhteystiedot
              </Link>
              <Link
                href="/tyonaytteet"
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
            <p className="absolute right-5 bottom-5 text-neutral-600 border-neutral-600 text-xs">
              Kuva: Jonna Karekivi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
