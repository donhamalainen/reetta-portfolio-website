"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const headerText = useRef(null);
  const headerText2 = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(headerText.current, { xPercent: xPercent });
    gsap.set(headerText2.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="px-5 overflow-hidden">
      <div className="h-full w-full md:h-[calc(100vh-40vh)] ">
        <div className="flex items-center" ref={slider}>
          <h1
            ref={headerText}
            className="text-[400px] dark:text-primary-light text-primary-dark whitespace-nowrap"
          >
            Aidosti raikasta.
          </h1>
          <h1
            ref={headerText2}
            className="text-[400px] dark:text-primary-light text-primary-dark whitespace-nowrap"
          >
            Aidosti raikasta.
          </h1>
        </div>
      </div>
    </main>
  );
}
