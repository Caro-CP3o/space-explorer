"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

const timelineData = [
  {
    date: "~2000 BCE",
    event: "<h2>Babylonians record the motions of Venus.</h2><br/>The Babylonians observed the movements of Venus in the night sky and recorded them meticulously. These observations played a crucial role in early astronomy, leading to the understanding of planetary motion.",
    image: "/images/planet-1.svg",
  },
  {
    date: "~1500 BCE",
    event: "<h2>Assyrians and Babylonians document systematic astronomical observations</h2>.<br/>Both Assyrians and Babylonians were among the first civilizations to develop detailed records of astronomical events like eclipses, star positions, and planetary movements, laying the groundwork for future astronomical studies.",
    image: "/images/planet-2.svg",
  },
  {
    date: "~500 BCE",
    event: "<h2>Pythagoras suggests a spherical Earth.</h2><br/>The Greek philosopher Pythagoras proposed that Earth was spherical based on his observations of the shape of the Earth's shadow on the moon during lunar eclipses.",
    image: "/images/planet-3.svg",
  },
  {
    date: "~350 BCE",
    event: "<h2>Aristotle provides evidence for a spherical Earth.</h2><br/>Aristotle presented several pieces of evidence supporting the idea of a spherical Earth, including the curvature of the Earth’s shadow during lunar eclipses and the varying visibility of stars depending on one's location.",
    image: "/images/planet-4.svg",
  },
  {
    date: "~250 BCE",
    event: "<h2>Aristarchus of Samos proposes a heliocentric model.</h2><br/>Aristarchus was one of the first to propose that the Sun, not the Earth, was at the center of the solar system, a revolutionary idea that was later fully developed by Copernicus.",
    image: "/images/planet-5.svg",
  },
  {
    date: "~240 BCE",
    event: "<h2>Eratosthenes measures Earth's circumference.</h2><br/>Eratosthenes calculated the Earth's circumference with remarkable accuracy using the angles of the Sun’s rays at different locations, employing geometry and basic trigonometry.",
    image: "/images/planet-6.svg",
  },
  {
    date: "~150 CE",
    event: "<h2>Ptolemy publishes the Almagest, detailing the geocentric model</h2>.<br/>Ptolemy’s Almagest became the definitive reference for the geocentric (Earth-centered) model of the universe, which remained dominant for over a millennium.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1054",
    event: "<h2>Chinese astronomers observe the supernova that created the Crab Nebula.</h2><br/>Chinese astronomers recorded the appearance of a bright supernova in the sky in 1054 CE, which is now known as the Crab Nebula, a remnant of a stellar explosion.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1543",
    event: "<h2>Copernicus proposes heliocentrism.</h2><br/>Copernicus published On the Revolutions of the Celestial Spheres, proposing the heliocentric model where the Earth and other planets orbit the Sun, challenging the long-standing geocentric view.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1609",
    event: "<h2>Galileo uses a telescope for astronomical observations, discovering Jupiter's moons</h2>.<br/>Galileo's use of a telescope revealed that Jupiter had moons, providing evidence against the geocentric model and supporting the heliocentric theory.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1609",
    event: "<h2>Johannes Kepler formulates the first two laws of planetary motion.</h2><br/>Kepler’s laws described the elliptical orbits of planets around the Sun and how the speed of a planet changes depending on its distance from the Sun.",
    image: "/images/planet-2.svg",
  },
  {
    date: "1610",
    event: "<h2>Galileo discovers the phases of Venus, supporting the heliocentric model.</h2><br/>Galileo’s observations of Venus’s phases showed that Venus orbited the Sun, not the Earth, providing further evidence for the heliocentric model.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1665",
    event: "<h2>Giovanni Cassini discovers the Great Red Spot on Jupiter.</h2><br/>Cassini was the first to observe the Great Red Spot, a massive storm on Jupiter, which is still a prominent feature of the planet today.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1671",
    event: "<h2>Giovanni Cassini discovers Iapetus, a moon of Saturn.</h2><br/>Cassini discovered Iapetus, one of Saturn’s moons, which is unique due to its two-toned appearance and large contrast between its bright and dark sides.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1781",
    event: "<h2>William Herschel discovers Uranus, the first planet found with a telescope.</h2><br/>Herschel's discovery of Uranus was the first planet to be found with a telescope, expanding our understanding of the solar system.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1801",
    event: "<h2>Giuseppe Piazzi discovers Ceres, the first known asteroid.</h2><br/>Piazzi discovered Ceres, now classified as a dwarf planet, marking the first asteroid discovered in the asteroid belt between Mars and Jupiter.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1846",
    event: "<h2>Neptune is discovered based on predictions by Urbain Le Verrier.</h2><br/>Neptune was discovered through mathematical predictions based on the observed irregularities in the orbit of Uranus, confirming the power of theoretical astronomy.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1905",
    event: "<h2>Albert Einstein proposes the Special Theory of Relativity.</h2><br/>Einstein's Special Theory of Relativity introduced groundbreaking concepts about space, time, and the speed of light, fundamentally altering our understanding of physics.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1916",
    event: "<h2>Albert Einstein publishes the General Theory of Relativity.</h2><br/>The General Theory of Relativity expanded on Einstein's previous work, explaining gravity as the curvature of spacetime caused by mass and energy, which has been confirmed by numerous experiments and observations.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1923",
    event: "<h2>Edwin Hubble confirms that the Andromeda 'nebula' is a separate galaxy.</h2><br/>Hubble's observations proved that the Andromeda 'nebula' was actually a galaxy separate from the Milky Way, expanding our view of the universe beyond the Milky Way.",
    image: "/images/planet-2.svg",
  },
  {
    date: "1929",
    event: "<h2>Edwin Hubble discovers the universe is expanding.</h2><br/>Hubble’s observations showed that galaxies were moving away from each other, leading to the realization that the universe is expanding, which became a cornerstone of modern cosmology.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1965",
    event: "<h2>Cosmic Microwave Background radiation is discovered.</h2><br/>The discovery of the Cosmic Microwave Background (CMB) radiation provided strong evidence for the Big Bang theory, showing the remnants of the early universe’s hot, dense state.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1969",
    event: "<h2>Apollo 11 lands the first humans on the Moon.</h2><br/>The Apollo 11 mission, with astronauts Neil Armstrong and Buzz Aldrin, successfully landed the first humans on the Moon, marking a monumental achievement in space exploration.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1977",
    event: "<h2>Voyager 1 and 2 are launched to explore the outer planets.</h2><br/>NASA launched the Voyager spacecraft to explore the outer solar system, with Voyager 1 eventually becoming the most distant human-made object in space.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1990",
    event: "<h2>The Hubble Space Telescope is launched.</h2><br/>The Hubble Space Telescope revolutionized our understanding of the universe, providing detailed images and data about distant galaxies, nebulae, and other celestial objects.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1992",
    event: "<h2>The first exoplanets are discovered.</h2><br/>The discovery of exoplanets, planets orbiting stars outside our solar system, opened up a new era in astronomy, leading to further studies on the possibility of life beyond Earth.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1998",
    event: "<h2>Discovery of the accelerated expansion of the universe, suggesting dark energy.</h2><br/>Observations of distant supernovae revealed that the universe’s expansion is accelerating, leading to the hypothesis of dark energy, a mysterious force driving this expansion.",
    image: "/images/planet-9.svg",
  },
  {
    date: "2006",
    event: "<h2>Pluto is reclassified as a dwarf planet.</h2><br/>The International Astronomical Union reclassified Pluto as a dwarf planet, marking a shift in our understanding of the solar system's structure.",
    image: "/images/planet-1.svg",
  },
  {
    date: "2012",
    event: "<h2>NASA's Curiosity rover lands on Mars.</h2><br/>Curiosity’s successful landing on Mars began an ongoing exploration mission, providing detailed information about the Martian environment and its potential for supporting life.",
    image: "/images/planet-2.svg",
  },
  {
    date: "2021",
    event: "<h2>James Webb Space Telescope is launched.</h2><br/>The James Webb Space Telescope, designed to be the most powerful space telescope, aims to explore the early universe, star formation, and the search for habitable planets.",
    image: "/images/planet-3.svg",
  },
];

export default function Timeline() {
  const timelineRef = useRef();
  const [animationTriggered, setAnimationTriggered] = useState(false); // State to track animation

  useEffect(() => {
    const element = timelineRef.current;

    // Set initial random positions for the images if the animation hasn't been triggered yet
    if (!animationTriggered) {
      Array.from(element.children).forEach((timelineItem, index) => {
        const image = timelineItem.querySelector("img");
        if (image) {
          const randomX = gsap.utils.random(-100, 100);
          const randomY = gsap.utils.random(-100, 100);
          gsap.set(image, { opacity: 1, x: randomX, y: randomY });
        }
      });
      setAnimationTriggered(true); // Mark the animation as triggered
    }

    // Create the horizontal scrolling animation
    const scrollTween = gsap.to(element, {
      x: () => -(element.scrollWidth - window.innerWidth + 80), // Move horizontally
      ease: "none", // Smooth linear scrolling
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `+=${element.scrollWidth - window.innerWidth + 80}`, // Scroll for the full container width
        scrub: true,
        pin: true,
        id: "timelineScroll",
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

        // // Trigger random movement only once during the interaction
        // if (animationTriggered) {
        //   Array.from(element.children).forEach((timelineItem, index) => {
        //     const image = timelineItem.querySelector("img");
        //     if (image) {
        //       const randomX = gsap.utils.random(-100, 100);
        //       const randomY = gsap.utils.random(-100, 100);
        //       gsap.to(image, {
        //         x: randomX,
        //         y: randomY,
        //         duration: 1.5, // Duration for the random movement
        //         ease: "power2.out",
        //       });
        //     }
        //   });
        // }
      },
      onStop: (self) => {
                // Trigger random movement only once during the interaction
                if (animationTriggered) {
                  Array.from(element.children).forEach((timelineItem, index) => {
                    const image = timelineItem.querySelector("img");
                    if (image) {
                      const randomX = gsap.utils.random(-100, 100);
                      const randomY = gsap.utils.random(-100, 100);
                      gsap.to(image, {
                        x: randomX,
                        y: randomY,
                        duration: 1.5, // Duration for the random movement
                        ease: "power2.out",
                      });
                    }
                  });
                }
      },

      preventDefault: false, // Prevent default scroll behavior
    });

    // Clean up ScrollTrigger and Observer on unmount
    return () => {
      ScrollTrigger.getById("timelineScroll")?.kill();
      Observer.getAll().forEach((obs) => obs.kill());
    };
  }, [animationTriggered]);

  return (
    <div className="timeline-container relative flex flex-1 items-center justify-center">
      <div ref={timelineRef} className="timeline flex gap-8 px-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3 border border-indigo-800 shadow-xl flex flex-col items-center justify-between text-center w-fit"
          >
            <h3 className="date text-xl font-bold text-indigo-600 mb-2 z-30 bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3">
              {item.date}
            </h3>
            <img
              src={item.image}
              alt={item.event}
              className="max-w-[300px] h-auto mb-4"
            />
            <p className="event min-w-[400px] text-lg z-30 bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3" dangerouslySetInnerHTML={{ __html: item.event }} />

          </div>
        ))}
      </div>
    </div>
  );
}
