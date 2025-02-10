"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

const timelineData = [
  {
    date: "~2000 BCE",
    title: "Babylonians record the motions of Venus.",
    event:
      "<br/>The Babylonians observed the movements of Venus in the night sky and recorded them meticulously. These observations played a crucial role in early astronomy, leading to the understanding of planetary motion.",
    image: "/images/planet-1.svg",
  },
  {
    date: "~1500 BCE",
    title:
      "Assyrians and Babylonians document systematic astronomical observations.",
    event:
      "<br/>Both Assyrians and Babylonians were among the first civilizations to develop detailed records of astronomical events like eclipses, star positions, and planetary movements, laying the groundwork for future astronomical studies.",
    image: "/images/planet-2.svg",
  },
  {
    date: "~500 BCE",
    title: "Pythagoras suggests a spherical Earth.",
    event:
      "<br/>The Greek philosopher Pythagoras proposed that Earth was spherical based on his observations of the shape of the Earth's shadow on the moon during lunar eclipses.",
    image: "/images/planet-3.svg",
  },
  {
    date: "~350 BCE",
    title: "Aristotle provides evidence for a spherical Earth.",
    event:
      "<br/>Aristotle presented several pieces of evidence supporting the idea of a spherical Earth, including the curvature of the Earth’s shadow during lunar eclipses and the varying visibility of stars depending on one's location.",
    image: "/images/planet-4.svg",
  },
  {
    date: "~250 BCE",
    title: "Aristarchus of Samos proposes a heliocentric model.",
    event:
      "<br/>Aristarchus was one of the first to propose that the Sun, not the Earth, was at the center of the solar system, a revolutionary idea that was later fully developed by Copernicus.",
    image: "/images/planet-5.svg",
  },
  {
    date: "~240 BCE",
    title: "Eratosthenes measures Earth's circumference.",
    event:
      "<br/>Eratosthenes calculated the Earth's circumference with remarkable accuracy using the angles of the Sun’s rays at different locations, employing geometry and basic trigonometry.",
    image: "/images/planet-6.svg",
  },
  {
    date: "~150 CE",
    title: "Ptolemy publishes the Almagest, detailing the geocentric model.",
    event:
      "<br/>Ptolemy’s Almagest became the definitive reference for the geocentric (Earth-centered) model of the universe, which remained dominant for over a millennium.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1054",
    title:
      "Chinese astronomers observe the supernova that created the Crab Nebula.",
    event:
      "<br/>Chinese astronomers recorded the appearance of a bright supernova in the sky in 1054 CE, which is now known as the Crab Nebula, a remnant of a stellar explosion.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1543",
    title: "Copernicus proposes heliocentrism.",
    event:
      "<br/>Copernicus published On the Revolutions of the Celestial Spheres, proposing the heliocentric model where the Earth and other planets orbit the Sun, challenging the long-standing geocentric view.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1609",
    title:
      ">Galileo uses a telescope for astronomical observations, discovering Jupiter's moons.",
    event:
      "<br/>Galileo's use of a telescope revealed that Jupiter had moons, providing evidence against the geocentric model and supporting the heliocentric theory.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1609",
    title: "Johannes Kepler formulates the first two laws of planetary motion.",
    event:
      "<br/>Kepler’s laws described the elliptical orbits of planets around the Sun and how the speed of a planet changes depending on its distance from the Sun.",
    image: "/images/planet-2.svg",
  },
  {
    date: "1610",
    title:
      "Galileo discovers the phases of Venus, supporting the heliocentric model.",
    event:
      "<br/>Galileo’s observations of Venus’s phases showed that Venus orbited the Sun, not the Earth, providing further evidence for the heliocentric model.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1665",
    title: "Giovanni Cassini discovers the Great Red Spot on Jupiter.",
    event:
      "<br/>Cassini was the first to observe the Great Red Spot, a massive storm on Jupiter, which is still a prominent feature of the planet today.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1671",
    title: "Giovanni Cassini discovers Iapetus, a moon of Saturn.",
    event:
      "<br/>Cassini discovered Iapetus, one of Saturn’s moons, which is unique due to its two-toned appearance and large contrast between its bright and dark sides.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1781",
    title:
      "William Herschel discovers Uranus, the first planet found with a telescope.",
    event:
      "<br/>Herschel's discovery of Uranus was the first planet to be found with a telescope, expanding our understanding of the solar system.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1801",
    title: "Giuseppe Piazzi discovers Ceres, the first known asteroid.",
    event:
      "<br/>Piazzi discovered Ceres, now classified as a dwarf planet, marking the first asteroid discovered in the asteroid belt between Mars and Jupiter.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1846",
    title: "Neptune is discovered based on predictions by Urbain Le Verrier.",
    event:
      "<br/>Neptune was discovered through mathematical predictions based on the observed irregularities in the orbit of Uranus, confirming the power of theoretical astronomy.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1905",
    title: "Albert Einstein proposes the Special Theory of Relativity.",
    event:
      "<br/>Einstein's Special Theory of Relativity introduced groundbreaking concepts about space, time, and the speed of light, fundamentally altering our understanding of physics.",
    image: "/images/planet-9.svg",
  },
  {
    date: "1916",
    title: "Albert Einstein publishes the General Theory of Relativity.",
    event:
      "<br/>The General Theory of Relativity expanded on Einstein's previous work, explaining gravity as the curvature of spacetime caused by mass and energy, which has been confirmed by numerous experiments and observations.",
    image: "/images/planet-1.svg",
  },
  {
    date: "1923",
    title:
      "Edwin Hubble confirms that the Andromeda 'nebula' is a separate galaxy.",
    event:
      "<br/>Hubble's observations proved that the Andromeda 'nebula' was actually a galaxy separate from the Milky Way, expanding our view of the universe beyond the Milky Way.",
    image: "/images/planet-2.svg",
  },
  {
    date: "1929",
    title: "Edwin Hubble discovers the universe is expanding.",
    event:
      "<br/>Hubble’s observations showed that galaxies were moving away from each other, leading to the realization that the universe is expanding, which became a cornerstone of modern cosmology.",
    image: "/images/planet-3.svg",
  },
  {
    date: "1965",
    title: "Cosmic Microwave Background radiation is discovered.",
    event:
      "<br/>The discovery of the Cosmic Microwave Background (CMB) radiation provided strong evidence for the Big Bang theory, showing the remnants of the early universe’s hot, dense state.",
    image: "/images/planet-4.svg",
  },
  {
    date: "1969",
    title: "Apollo 11 lands the first humans on the Moon.",
    event:
      "<br/>The Apollo 11 mission, with astronauts Neil Armstrong and Buzz Aldrin, successfully landed the first humans on the Moon, marking a monumental achievement in space exploration.",
    image: "/images/planet-5.svg",
  },
  {
    date: "1977",
    title: "Voyager 1 and 2 are launched to explore the outer planets.",
    event:
      "<br/>NASA launched the Voyager spacecraft to explore the outer solar system, with Voyager 1 eventually becoming the most distant human-made object in space.",
    image: "/images/planet-6.svg",
  },
  {
    date: "1990",
    title: "The Hubble Space Telescope is launched.",
    event:
      "<br/>The Hubble Space Telescope revolutionized our understanding of the universe, providing detailed images and data about distant galaxies, nebulae, and other celestial objects.",
    image: "/images/planet-7.svg",
  },
  {
    date: "1992",
    title: "The first exoplanets are discovered.",
    event:
      "<br/>The discovery of exoplanets, planets orbiting stars outside our solar system, opened up a new era in astronomy, leading to further studies on the possibility of life beyond Earth.",
    image: "/images/planet-8.svg",
  },
  {
    date: "1998",
    title:
      "Discovery of the accelerated expansion of the universe, suggesting dark energy.",
    event:
      "<br/>Observations of distant supernovae revealed that the universe’s expansion is accelerating, leading to the hypothesis of dark energy, a mysterious force driving this expansion.",
    image: "/images/planet-9.svg",
  },
  {
    date: "2006",
    title: "Pluto is reclassified as a dwarf planet.",
    event:
      "<br/>The International Astronomical Union reclassified Pluto as a dwarf planet, marking a shift in our understanding of the solar system's structure.",
    image: "/images/planet-1.svg",
  },
  {
    date: "2012",
    title: "NASA's Curiosity rover lands on Mars.",
    event:
      "<br/>Curiosity’s successful landing on Mars began an ongoing exploration mission, providing detailed information about the Martian environment and its potential for supporting life.",
    image: "/images/planet-2.svg",
  },
  {
    date: "2021",
    title: "James Webb Space Telescope is launched.",
    event:
      "<br/>The James Webb Space Telescope, designed to be the most powerful space telescope, aims to explore the early universe, star formation, and the search for habitable planets.",
    image: "/images/planet-3.svg",
  },
];

export default function Timeline() {
  const timelineRef = useRef(); // Référence pour l'élément de la frise (section)
  // State pour contrôler si l'animation a été déclenchée
  const [animationTriggered, setAnimationTriggered] = useState(false);
  // State pour vérifier si l'écran est suffisamment grand pour le défilement horizontal
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" && window.innerHeight > 705
  );

  // Gère les changements de taille de l'écran et la première animation de la frise
  useEffect(() => {
    const element = timelineRef.current;

    // Fonction pour ajuster l'état en fonction de la hauteur de l'écran
    const handleResize = () => {
      setIsLargeScreen(window.innerHeight > 705);
    };

    // Ajout d'un écouteur d'événements pour la redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Si l'animation n'a pas encore été déclenchée, positionner les images de manière aléatoire
    if (!animationTriggered) {
      Array.from(element.children).forEach((timelineItem, index) => {
        const image = timelineItem.querySelector("img");
        if (image) {
          const randomX = gsap.utils.random(-100, 100);
          const randomY = gsap.utils.random(-100, 100);
          gsap.set(image, { opacity: 1, x: randomX, y: randomY });
        }
      });
      setAnimationTriggered(true);
    }
    // Si la taille de l'écran est suffisamment grande, activer le défilement horizontal
    if (isLargeScreen) {
      const scrollTween = gsap.to(element, {
        x: () => -(element.scrollWidth - window.innerWidth + 80), // horizontal + marges paddings
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => `+=${element.scrollWidth - window.innerWidth + 80}`,
          scrub: true,
          pin: true,
          id: "timelineScroll",
        },
      });

      Observer.create({
        type: "wheel,touch,pointer,key", //capture les events
        onChange: (self) => {
          const progressDelta = self.deltaY / window.innerHeight;
          scrollTween.progress(
            gsap.utils.clamp(0, 1, scrollTween.progress() + progressDelta)
          );
        },
      });
    }

    Observer.create({
      type: "wheel,touch,pointer,key", //capture les events
      onStop: (self) => {
        if (animationTriggered) {
          Array.from(element.children).forEach((timelineItem, index) => {
            const image = timelineItem.querySelector("img");
            if (image) {
              const randomX = gsap.utils.random(-100, 100);
              const randomY = gsap.utils.random(-100, 100);
              gsap.to(image, {
                x: randomX,
                y: randomY,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: image,
                  start: "top bottom-=100", // Trigger 100px avant d'entrer dans le viewport
                  toggleActions: "play none none reverse",
                },
              });
            }
          });
        }
      },

      preventDefault: false,
    });

    return () => {
      ScrollTrigger.getById("timelineScroll")?.kill();
      Observer.getAll().forEach((obs) => obs.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [animationTriggered, isLargeScreen]); // Redémarre l'effet lorsque l'écran est redimensionné ou lorsque l'animation a été déclenchée

  return (
    <div className="timeline-container relative flex flex-1 items-center justify-center overflow-x-hidden">
      <div ref={timelineRef} className="timeline flex gap-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3 border border-indigo-800 shadow-xl flex flex-col items-center justify-between text-center w-fit min-w-[400px] "
          >
            <h3 className="date text-xl font-bold text-indigo-600 mb-2 z-30 bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3">
              {item.date}
            </h3>
            <img
              src={item.image}
              alt={item.event}
              className="max-w-[200px] h-auto mb-4"
            />
            <div className="text z-30 text-lg z-30 bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3">
              <h2 className="">{item.title}</h2>
              <p
                className="event"
                dangerouslySetInnerHTML={{ __html: item.event }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
