"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }

        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchApod();
  }, []);

  useEffect(() => {
    const animatePlanets = () => {
      const planets = document.querySelectorAll(".planet");
      if (planets.length > 0) {
        // Animate each planet to move randomly across the screen
        planets.forEach((planet) => {
          gsap.to(planet, {
            duration: 20,
            x: "random(-100, 100)", // Random movement on the X-axis
            y: "random(-100, 100)", // Random movement on the Y-axis
            rotation: "random(0, 360)", // Optional: Rotate the planets for a dynamic effect
            repeat: -1, // Infinite repeat
            yoyo: true, // Smooth back-and-forth motion
            ease: "power1.inOut",
          });
        });
      }
    };

    const timeout = setTimeout(animatePlanets, 100); // Delay to allow DOM rendering
    return () => clearTimeout(timeout);
  }, [apodData]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!apodData) {
    return <div>Loading...</div>;
  }

  const generateRandomPosition = () => {
    const top = Math.random() * 100; // Random percentage for the top position
    const left = Math.random() * 100; // Random percentage for the left position
    return { top: `${top}%`, left: `${left}%` };
  };

  return (
    <div className="apod-page relative flex items-center justify-center w-full min-h-screen px-20 py-20">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <img
              key={index}
              src={`/images/planet-${index + 1}.svg`}
              alt={`Planet ${index + 1}`}
              className="planet absolute w-40 h-40"
              style={{
                // Initial random position for each planet
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)", // Center the planet around its position
              }}
            />
          );
        })}
      </div>
      <div className="w-full max-w-sm lg:max-w-full lg:flex bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm px-3 py-3 border border-indigo-800 shadow-xl">
        {/* Media Section */}
        <div className="h-48 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
          {apodData.media_type === "image" ? (
            <img
              src={apodData.url}
              alt={apodData.title}
              className="h-full w-full object-cover rounded"
            />
          ) : (
            <iframe
              src={apodData.url}
              title="APOD Video"
              className="h-full w-full"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between leading-normal">
          {/* Title */}
          <div className="mb-8">
            <h1 className="bg-indigo-500 py-4 px-4 font-bold text-xl mb-2 rounded">
              {apodData.title}
            </h1>
            <p className="text-white text-sm px-2 py-1 mb-4 font-bold ">
              {apodData.date}
            </p>
            {/* <p className="text-base bg-indigo-500 bg-opacity-50 rounded px-3 py-3">{apodData.explanation}</p> */}
            <div className="bg-indigo-500 bg-opacity-50 rounded px-3 py-3">
              {apodData.explanation
                .split(
                  /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<!\s[A-Z]\.)(?<=\.|\?|!)\s+/
                ) // Split into sentences
                .map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/nasa-logo.svg"
              alt="Logo"
            />
            <div className="text-sm">
              <p className="leading-none">NASA APOD</p>
              <p className="">Astronomy Picture of the Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apod;
