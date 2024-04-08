import { Metadata } from "next";
import Blog from "./page";

export const metadata: Metadata = {
  title: "Työnäytteet",
  description: "",
};

import { client } from "@/sanity/lib/client";
import {
  latestNewsQuery,
  latestPhotogalleryQuery,
  latestProjectQuery,
} from "@/libs/queries";

async function getData() {
  const latestPhotoData = await client.fetch(latestPhotogalleryQuery);
  const latestNewsData = await client.fetch(latestNewsQuery);
  const latestProject = await client.fetch(latestProjectQuery);
  return { latestNewsData, latestPhotoData, latestProject };
}

export default async function BlogLayout() {
  const photoData = await getData();
  // console.log(photoData);
  return <Blog data={photoData} />;
}
