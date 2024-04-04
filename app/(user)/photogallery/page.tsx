"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { photogalleryQuery } from "@/libs/queries";
import PhotogalleryComponents from "@/components/PhotogalleryComponents";

export default function Photogallery() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchPhotogalleryData() {
      const latestPhotoData = await client.fetch(photogalleryQuery);
      setData(latestPhotoData);
      setIsLoaded(true);
    }

    fetchPhotogalleryData();
  }, []); // Tyhjä riippuvuuslista tarkoittaa, että tämä suoritetaan vain komponentin mount-vaiheessa

  return (
    <React.Fragment>
      {isLoaded ? (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {data.map((photo, index: React.Key) => (
            <PhotogalleryComponents
              key={index}
              photo={photo}
              photoIndex={index}
            />
          ))}
        </ul>
      ) : (
        <h4 className="flex justify-center text-[clamp(28px,5vw,48px)]">
          Ladataan kuvia...
        </h4>
      )}
    </React.Fragment>
  );
}
