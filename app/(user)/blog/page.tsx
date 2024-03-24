import React from "react";

// METADATA
export const metadata = {
  title: "Työnäytteet",
  description: "",
};

export default function Blog() {
  return (
    <section className="px-10">
      <div className="pb-5 border-b-2">
        <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10">
          Työnäytteet.
        </h1>
        <h2 className="text-[clamp(18px,5vw,38px)]">
          <p>
            Tervetuloa tutustumaan työnäytteisiini, jotka kattavat laajan kirjon
            projekteja. Kokoelmani sisältää esimerkkejä viimeisimmistä töistäni,
            joissa olen hyödyntänyt sekä perinteisiä että moderneja
            suunnittelumenetelmiä luodakseni ratkaisuja, jotka paitsi täyttävät,
            myös ylittävät asiakkaiden odotukset. Jokainen projekti on osoitus
            sitoutumisestani laatuun, huolellisuuteen ja innovatiiviseen
            ajatteluun.
          </p>
        </h2>
      </div>
      <div></div>
    </section>
  );
}
