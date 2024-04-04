import { Metadata } from "next";
import About from "./page";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { getAboutData } from "@/libs/queries";

async function FetchAboutData() {
  const aboutData = await client.fetch(getAboutData);
  return aboutData;
}
export default async function AboutLayout() {
  const aboutData = await FetchAboutData();
  return <About aboutData={aboutData} />;
}
