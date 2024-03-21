import { client } from "@/sanity/lib/client";
export default async function getSanityCVData() {
  const query = `*[_type == "yhteistiedot"][0]{
    cv_file{
      "CV_URL": asset->url
    }
  }`;
  try {
    const data = await client.fetch(query);
    return data.cv_file.CV_URL;
  } catch (error) {
    console.error("Failed to fetch CV data from Database", error);
    return "null";
  }
}
