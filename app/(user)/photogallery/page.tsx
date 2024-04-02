"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { photogalleryQuery } from "@/libs/queries";
import PhotogalleryComponents from "@/components/PhotogalleryComponents";

export default function Photogallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPhotogalleryData() {
      const latestPhotoData = await client.fetch(photogalleryQuery);
      setData(latestPhotoData);
    }

    fetchPhotogalleryData();
  }, []); // Tyhjä riippuvuuslista tarkoittaa, että tämä suoritetaan vain komponentin mount-vaiheessa

  return (
    <React.Fragment>
      <ul className="grid grid-cols-3 gap-4">
        {data.map((photo, index) => (
          <PhotogalleryComponents key={index} photo={photo} />
        ))}
      </ul>
    </React.Fragment>
  );
}
