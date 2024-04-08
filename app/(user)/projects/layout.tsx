import { Metadata } from "next";
import Project from "./page";

export const metadata: Metadata = {
  title: "Projektit",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { getNews } from "@/libs/queries";
async function FetchProjects() {
  const fetchNews = await client.fetch(getNews);
  return fetchNews;
}

export default async function ProjectLayout() {
  return <Project />;
}
