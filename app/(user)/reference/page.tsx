import ReferenceComponent from "@/components/ReferenceComponent";
import React from "react";

export default async function Reference({
  referenceData,
}: {
  referenceData: any[];
}) {
  return (
    <section className="px-5 md:px-10">
      <div className="">
        <div className="relative">
          <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-baseline">
            Juttunäytteet.
          </h1>
        </div>
        <ReferenceComponent
          otsikko={referenceData[0].juttunayteOtsikko}
          slug={referenceData[0].juttunayteLinkki}
          description={referenceData[0].juttunayteKuvaus}
          index={1}
        />
      </div>
    </section>
  );
}
