"use client";

import React, { useEffect, useState } from "react";
import getFinnishTime from "@/hooks/getTime";
import FormComponent from "@/components/FormComponent";
export default function about() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalID = setInterval(() => {
      const intervalTime = getFinnishTime();
      setTime(intervalTime);
    }, 500);
    return () => clearInterval(intervalID);
  });
  return (
    <section className="px-10">
      <div className="md:grid md:grid-cols-2 relative">
        <h2 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText">
          Yhteistiedot.
        </h2>
        <p className="py-4 font-authorItalic">
          Olen iloinen, että olette kiinnostunut ottamaan yhteyttä. Olipa
          kyseessä sitten tarve freelance-yhteistyöhön, mahdollisuus yhteisiin
          projekteihin tai yksinkertaisesti keskustelu alaan liittyvistä
          ideoista ja näkemyksistä, otan mielelläni vastaan viestinne.
          <br />
          Olen vakuuttunut siitä, että avoin ja rakentava kommunikointi on avain
          menestyksekkääseen yhteistyöhön. Olen sitoutunut tarjoamaan
          korkealaatuista työtä ja täyttämään asetetut tavoitteet aikataulussa.
          Arvostan mahdollisuutta kuulla lisää tarpeistanne ja mahdollisuuksista
          yhteistyöhön.
          <br />
          Kiitos, että harkitsette yhteydenottoa. Odotan innolla mahdollisuutta
          keskustella kanssanne ja löytää tapoja, joilla voimme tukea toinen
          toisiamme.
        </p>
      </div>
      <FormComponent />
    </section>
  );
}
