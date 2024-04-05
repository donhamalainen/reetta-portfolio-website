import { Metadata } from "next";
import Reference from "./page";

export const metadata: Metadata = {
  title: "Juttunäytteet",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { getNews } from "@/libs/queries";
async function FetchNews() {
  const fetchNews = await client.fetch(getNews);
  return fetchNews;
}

export default async function ReferenceLayout() {
  const data = await FetchNews();
  return <Reference referenceData={data} />;
}
