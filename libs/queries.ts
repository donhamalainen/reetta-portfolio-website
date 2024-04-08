import { groq } from "next-sanity";

// Get all projects
export const projectQuery = groq`*[_type == "projektit"]`;

export const latestProjectQuery = groq`*[_type == "projektit"][0]{
  projectImage
}`;

// Get Photogallery
export const latestPhotogalleryQuery = groq`*[_type == "kuvagalleria"] | order(_createdAt desc)[0]{
  kuva
}`;

export const photogalleryQuery = groq`*[_type == "kuvagalleria"]`;

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

// Get news
export const getNews = groq`*[_type == "juttunaytteet"]`;

export const latestNewsQuery = groq`*[_type == "juttunaytteet"][0]{
  juttunayteKuva
}`;
