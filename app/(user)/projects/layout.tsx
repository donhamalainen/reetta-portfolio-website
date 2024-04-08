import { Metadata } from "next";
import Project from "./page";

export const metadata: Metadata = {
  title: "Projektit",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/libs/queries";
async function FetchProjects() {
  const fetchProjects = await client.fetch(projectQuery);
  return fetchProjects;
}

export default async function ProjectLayout() {
  const data = await FetchProjects();
  return <Project projectData={data} />;
}
