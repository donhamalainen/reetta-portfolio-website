import { client } from "@/sanity/lib/client";
import { latestPhotogalleryQuery } from "@/libs/queries";
import BlogPage from "./blogPage";

export const metadata = {
  title: "Työnäytteet",
  description:
    "Tällä sivulla pääset tutustumaan työnäytteisiini. Kokemusta ja näytteitä on kertynyt niin opintojen, kuin kesätöidenkin ajalta. Olethan yhteydessä minuun, mikäli haluat nähdä lisää!",
};

async function getLatestPhotoData() {
  const latestPhotoData = await client.fetch(latestPhotogalleryQuery);
  return latestPhotoData;
}

export default async function Blog() {
  const latestPhotoData = await getLatestPhotoData();
  //console.log(data);
  return <BlogPage photogallery={latestPhotoData} />;
}
