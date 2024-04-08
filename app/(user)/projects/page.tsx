import ProjectComponent from "@/components/ProjectComponent";
import React from "react";

export default function Projects({ projectData = [] }: any) {
  return (
    <section className="px-5 md:px-10 mb-10">
      <div className="grid md:grid-cols-12 gap-5">
        <h1 className="md:col-start-1 md:col-end-5 text-[clamp(48px,5vw,120px)] leading-none font-bold text-secondary-darkText mb-10 flex items-baseline">
          Projektit.
        </h1>
        <ul className="md:col-start-5 md:col-end-13 space-y-2">
          {projectData.map((data: any, index: React.Key) => (
            <li key={index}>
              <ProjectComponent
                otsikko={data.projectTitle}
                teksti={data.projectDescription}
                kuva={data.projectImage}
                slug={data.projectSlug.current}
              />
            </li>
          )) ?? null}
        </ul>
      </div>
    </section>
  );
}
