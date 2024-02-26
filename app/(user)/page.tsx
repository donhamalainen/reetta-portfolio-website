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
    <main className="px-5 pt-20">
      <section className="w-full h-[calc(100vh-80px)]">
        {/* HEADER IMAGE */}
        <div className="relative w-full md:h-5/6">
          <Image
            src={DefaultImage}
            alt="Reetta"
            priority
            className="w-full h-full object-cover rounded-xl z-10"
          />
          {/* HEADER CONTENT */}
          <div className="hidden md:flex flex-col justify-between absolute lg:w-[40%] min-h-60 w-1/2 left-5 top-5 backdrop-blur-lg rounded-xl border-2 border-white p-5 shadow-lg">
            <h1
              ref={imageTextRef}
              className="md:text-base xl:text-xl leading-none font-melodrama text-primary-dark h-full font-medium"
            >
              {homeText.text[referenceIndex]}
            </h1>
            <div className="flex justify-center items-center space-x-4 mt-4">
              {homeText.text.map((_, idx) => (
                <button
                  key={idx}
                  className={`rounded-full ${
                    referenceIndex === idx
                      ? "bg-primary-dark h-3 w-3"
                      : "bg-primary-dark/30 h-2 w-2"
                  } transition duration-200 ease-in-out`}
                  onClick={() => setReferenceIndex(idx)}
                  aria-label={`Siirry tekstiin ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
          <div
            className="absolute bottom-5 right-5 items-center"
            aria-hidden="true"
          >
            <p className="text-[clamp(24px,5vw,128px)] text-primary-light  whitespace-nowrap mix-blend-difference">
              Aidosti raikasta.
            </p>
          </div>
        </div>

        {/* */}
      </section>
    </main>
  );
}

/*
 <div className="hidden md:block absolute lg:w-[40%] w-1/2 left-5 top-5 backdrop-blur-lg rounded-xl border-2 border-white p-5 shadow-lg">
            <h1 className="md:text-base xl:text-xl leading-none font-melodrama text-primary-dark h-full font-medium">
              Moikka!
              <br />
              Huippua, että olet täällä. Minä olen Reetta Salmela, parikymppinen
              journalistiopiskelija Oulusta. Tällä sivustolla pääset tutustumaan
              työnäytteisiini, sekä -historiaani.
              <br /> Kiinnostus yhteiskunnallisiin asioihin heräsi minulle jo
              nuorena ja olen aina halunnut olla vaikuttajan asemassa. Tästä
              kertoo pitkä taustani erilaisen yhdistystoiminnan ja
              opiskelijakuntien jäsenenä.
              <br />
              Luonteeltani olen sosiaalinen ja puhelias. Lapsuuteni olen
              viettänyt erilaisten pallopelien parissa ja kokemusta tiimeissä
              toimimisesta löytyy sen ansiosta runsaasti. Innostun asioista
              helposti ja pyrin toimimaan tehokkaasti edistääkseni niitä.
              <br />
              Kerron mielelläni lisää, olethan minuun yhteydessä, mikäli
              mielenkiinto heräsi!
            </h1>
          </div>
*/

/*
 <div className="hidden md:block absolute lg:w-[40%] w-1/2 left-5 top-5 backdrop-blur-lg rounded-xl border-2 border-white p-5 shadow-lg">
            <h1 className="md:text-base xl:text-xl leading-none font-melodrama text-primary-dark h-full font-medium">
              "Salmela on monipuolinen toimittaja, jolta syntyvät niin uutis- ja
              henkilöjutut kuin laajemmat reportaasitkin" - Raahen Seutu
            </h1>
          </div>
          <div className="hidden md:block absolute lg:w-[40%] w-1/2 left-5 top-20 backdrop-blur-lg rounded-xl border-2 border-white p-5 shadow-lg">
            <h1 className="md:text-base xl:text-xl leading-none font-melodrama text-primary-dark h-full font-medium">
              "Harjoitusohjelma oli erityisen hyvin ja laadukkaasti suunniteltu.
              Reetta osoitti toiminnassaan esimerkillistä käytöstä ja toimi
              hyvänä esimerkkinä nuoremmille. Lasten ohjaaminen onnistui hyvin."
              - Pattijoen Urheilijat juniorit
            </h1>
          </div>
           <div className="hidden md:block absolute lg:w-[40%] w-1/2 left-5 top-20 backdrop-blur-lg rounded-xl border-2 border-white p-5 shadow-lg">
            <h1 className="md:text-base xl:text-xl leading-none font-melodrama text-primary-dark h-full font-medium">
             "Salmela tarttuu ripeästi annettuihin työtehtäviin ja on oma-alotteinen ja vastuuntuntoinen. Hän on sopeutunut hienosti pienen toimituksen kiireiseen aikatauluun" - Raahen Seutu
            </h1>
          </div>
*/
