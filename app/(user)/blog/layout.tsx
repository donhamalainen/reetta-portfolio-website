import { Metadata } from "next";
import Blog from "./page";

export const metadata: Metadata = {
  title: "Työnäytteet",
  description: "",
};

import { client } from "@/sanity/lib/client";
import { latestNewsQuery, latestPhotogalleryQuery } from "@/libs/queries";

async function getData() {
  const latestPhotoData = await client.fetch(latestPhotogalleryQuery);
  const latestNewsData = await client.fetch(latestNewsQuery);
  return { latestNewsData, latestPhotoData };
}

export default async function BlogLayout() {
  const photoData = await getData();
  // console.log(photoData);
  return <Blog data={photoData} />;
}
