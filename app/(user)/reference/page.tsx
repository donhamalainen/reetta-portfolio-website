import ReferenceComponent from "@/components/ReferenceComponent";
import React from "react";

export default async function Reference({ referenceData }: any) {
  return (
    <section className="px-5 md:px-10">
      <div className="">
        <div className="relative">
          <h1 className="text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-baseline">
            Juttunäytteet.
          </h1>
        </div>
        {referenceData.map((data: any, index: number) => (
          <ReferenceComponent
            otsikko={data.juttunayteOtsikko}
            slug={data.juttunayteLinkki}
            description={data.juttunayteKuvaus}
            index={index + 1}
            image={data.juttunayteKuva.asset}
          />
        ))}
      </div>
    </section>
  );
}
