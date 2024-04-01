import { groq } from "next-sanity";

// Get all projects
export const projectQuery = groq``;

// Navigation
export const navigationQuery = groq`*[_type == "navigation"]`;

// Get Photogallery
export const latestPhotogalleryQuery = groq`*[_type == "kuvagalleria"] | order(_createdAt desc)[0]`;

export const photogalleryQuery = groq`*[_type == "kuvagalleria"] | order(_createdAt desc)`;
