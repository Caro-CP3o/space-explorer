"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

const timelineData = [
  {
    date: "~2000 BCE",
    event: "Babylonians record the motions of Venus.",
    image: "/images/planet-1.svg",
  },
  {
    date: "~1500 BCE",
    event:
      "Assyrians and Babylonians document systematic astronomical observations.",
    image: "/images/planet-2.svg",
  },
  {
    date: "~500 BCE",
    event: "Pythagoras suggests a spherical Earth.",
    image: "/images/planet-3.svg",
  },
  {
    date: "~350 BCE",
    event: "Aristotle provides evidence for a spherical Earth.",
    image: "/images/planet-4.svg",
  },
  {
    date: "~250 BCE",
    event: "Aristarchus of Samos proposes a heliocentric model.",
    image: "/images/planet-5.svg",
  },
  {
    date: "~240 BCE",
    event: "Eratosthenes measures Earth's circumference.",
    image: "/images/planet-6.svg",
  },
  {
    date: "~150 CE",
    event: "Ptolemy publishes the Almagest, detailing the geocentric model.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1054",
    event:
      "Chinese astronomers observe the supernova that created the Crab Nebula.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1543",
    event: "Copernicus proposes heliocentrism.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1609",
    event:
      "Galileo uses a telescope for astronomical observations, discovering Jupiter's moons.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1609",
    event: "Johannes Kepler formulates the first two laws of planetary motion.",
    image: "/images/planet-2.svg",
  },
  {
    date: "1610",
    event:
      "Galileo discovers the phases of Venus, supporting the heliocentric model.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1665",
    event: "Giovanni Cassini discovers the Great Red Spot on Jupiter.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1671",
    event: "Giovanni Cassini discovers Iapetus, a moon of Saturn.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1781",
    event:
      "William Herschel discovers Uranus, the first planet found with a telescope.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1801",
    event: "Giuseppe Piazzi discovers Ceres, the first known asteroid.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1846",
    event: "Neptune is discovered based on predictions by Urbain Le Verrier.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1905",
    event: "Albert Einstein proposes the Special Theory of Relativity.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1916",
    event: "Albert Einstein publishes the General Theory of Relativity.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1923",
    event:
      'Edwin Hubble confirms that the Andromeda "nebula" is a separate galaxy.',
    image: "/images/planet-2.svg",
  },
  {
    date: "1929",
    event: "Edwin Hubble discovers the universe is expanding.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1965",
    event: "Cosmic Microwave Background radiation is discovered.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1969",
    event: "Apollo 11 lands the first humans on the Moon.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1977",
    event: "Voyager 1 and 2 are launched to explore the outer planets.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1990",
    event: "The Hubble Space Telescope is launched.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1992",
    event: "The first exoplanets are discovered.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1998",
    event:
      "Discovery of the accelerated expansion of the universe, suggesting dark energy.",
    image: "/images/planet-9.svg",
  },
  {
    date: "2006",
    event: "Pluto is reclassified as a dwarf planet.",
    image: "/images/planet-1.svg",
  },
  {
    date: "2012",
    event: "NASA's Curiosity rover lands on Mars.",
    image: "/images/planet-2.svg",
  },
  {
    date: "2021",
    event: "James Webb Space Telescope is launched.",
    image: "/images/planet-3.svg",
  },
];

export default function Timeline() {
  const timelineRef = useRef();

  useEffect(() => {
    const element = timelineRef.current;

    // // Loop through the timeline items and animate images with random movement on scroll
    // timelineData.forEach((item, index) => {
    //   const timelineItem = element.children[index];
    //   const image = timelineItem.querySelector("img");

    //   // Set initial random positions for the images
    //   const randomX = gsap.utils.random(-100, 100);
    //   const randomY = gsap.utils.random(-100, 100);
    //   gsap.set(image, { opacity: 1, x: randomX, y: randomY });

    // });

    // Set initial random positions for the images
    // Array.from(element.children).forEach((timelineItem) => {
    //   const image = timelineItem.querySelector("img");
    //   if (image) {
    //     const randomX = gsap.utils.random(-100, 100);
    //     const randomY = gsap.utils.random(-100, 100);
    //     gsap.set(image, { opacity: 1, x: randomX, y: randomY });
    //   }
    // });

        // Animate each image individually when it enters the viewport
        Array.from(element.children).forEach((timelineItem) => {
          const image = timelineItem.querySelector("img");
          if (image) {
            gsap.set(image, { opacity: 0, x: gsap.utils.random(-50, 50), y: gsap.utils.random(-50, 50) });
    
            gsap.to(image, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: timelineItem,
                start: "top 80%", // Triggers animation when the image is about to enter viewport
                end: "top 30%", // Stops when it moves up
                toggleActions: "play none none reverse", // Plays on enter, reverses on exit
              },
            });
          }
        });

    // Create the horizontal scrolling animation
    const scrollTween = gsap.to(element, {
      x: () => -(element.scrollWidth - window.innerWidth + 40), // Move horizontally
      ease: "none", // Smooth linear scrolling
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `+=${element.scrollWidth - window.innerWidth + 40}`, // Scroll for the full container width
        scrub: true,
        pin: true,
        id: "timelineScroll"
      },
    });
    // Create a custom Observer
    Observer.create({
      type: "wheel,touch,pointer,key", // Capture wheel, touch, and pointer events
      onChange: (self) => {
        const progressDelta = self.deltaY / window.innerHeight; // Calculate progress change
        scrollTween.progress(
          gsap.utils.clamp(0, 1, scrollTween.progress() + progressDelta)
        ); // Update the progress
      },
      onStop: () => {
       
      },
      onUp: () => {
        // Optional: Trigger specific actions for upward motion
      },
      onKeyDown: (event) => {
        let delta = 0.05; // Adjust this value for more or less movement per key press
    
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          scrollTween.progress(gsap.utils.clamp(0, 1, scrollTween.progress() + delta));
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          scrollTween.progress(gsap.utils.clamp(0, 1, scrollTween.progress() - delta));
        }
      },
      preventDefault: false, // Prevent default scroll behavior
    });

    // Clean up ScrollTrigger and Observer on unmount
    return () => {
      ScrollTrigger.getById("timelineScroll")?.kill();
      Observer.getAll().forEach((obs) => obs.kill());
    };
  }, []);

  return (
    <div className="timeline-container relative flex flex-1 items-center justify-center">
      <div ref={timelineRef} className="timeline flex gap-8 px-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3 border border-grey-500 shadow-xl flex flex-col items-center justify-between text-center w-fit"
          >
            <h3 className="date text-xl font-bold text-indigo-600 mb-2 z-30">
              {item.date}
            </h3>
            <img
              src={item.image}
              alt={item.event}
              className="max-w-[300px] h-auto mb-4"
            />
            <p className="event min-w-[200px] text-ml z-30">{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
