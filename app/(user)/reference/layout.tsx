import { Metadata } from "next";
import Reference from "./page";

export const metadata: Metadata = {
  title: "Juttunäytteet",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { latestPhotogalleryQuery } from "@/libs/queries";

async function getLatestPhotoData() {
  const latestPhotoData = await client.fetch(latestPhotogalleryQuery);
  return latestPhotoData;
}
export default async function ReferenceLayout() {
  return <Reference />;
}
