import { client } from "@/sanity/lib/client";
export default async function getPhotoGallery() {
  const query = `*[_type == "kuvagalleria"]`;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch CV data from Database", error);
    return null;
  }
}
