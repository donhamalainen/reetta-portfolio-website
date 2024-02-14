"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  return (
    <main className="px-5 overflow-hidden">
      <div className="h-full w-full md:h-[calc(100vh-40vh)] ">
        <div className="flex items-center" aria-hidden>
          <p className="text-[300px] dark:text-primary-light text-primary-dark whitespace-nowrap">
            Aidosti raikasta.
          </p>
          <p className="text-[300px] dark:text-primary-light text-primary-dark whitespace-nowrap">
            Aidosti raikasta.
          </p>
        </div>
      </div>
    </main>
  );
}
