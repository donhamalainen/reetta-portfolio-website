import { Metadata } from "next";
import Blog from "./page";

export const metadata: Metadata = {
  title: "Työnäytteet",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { latestPhotogalleryQuery } from "@/libs/queries";
async function getLatestPhotoData() {
  const latestPhotoData = await client.fetch(latestPhotogalleryQuery);
  return latestPhotoData;
}
export default async function BlogLayout() {
  const photoData = await getLatestPhotoData();
  console.log(photoData);
  return <Blog photogallery={photoData} />;
}
