import { groq } from "next-sanity";

// Get all projects
export const projectQuery = groq``;

// Get Photogallery
export const latestPhotogalleryQuery = groq`*[_type == "kuvagalleria"] | order(_createdAt desc)[0]`;

export const photogalleryQuery = groq`*[_type == "kuvagalleria"] | order(_createdAt desc)`;

// Get About information

export const getCVData = groq`*[_type == "yhteistiedot"][0]{
    cv_file{
      "CV_URL": asset->url
    }
  }`;

export const getAboutData = groq`*[_type == "yhteistiedot"][0]{
  mail,
  phone
}`;
