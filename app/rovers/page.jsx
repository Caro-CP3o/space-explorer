"use client";

import { useState, useEffect } from "react";

export function Rovers() {
  // State pour stocker les images
  const [roverImages, setRoverImages] = useState([]);
  // State pour stocker les erreurs
  const [error, setError] = useState(null);
  // State pour suivre l'index de l'image active
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch rover images de NASA API
  useEffect(() => {
    const fetchRoverImages = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch rover images");
        }

        const data = await response.json();

        // Limite aux 24 images les plus récentes
        const recentImages = data.photos.slice(0, 24);
        // Stocke les images
        setRoverImages(recentImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRoverImages();
  }, []);

  // Fonction pour aller à l'image précédante
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? roverImages.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour aller à l'image suivante
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === roverImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Affichage d'un message d'erreur si une erreur survient lors du chargement des images
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Affichage d'un message de chargement tant que les images ne sont pas disponibles
  if (roverImages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {roverImages.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={image.img_src}
              alt={`Rover Image ${index + 1}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>

      {/* Slider controls - boutons previous/next */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-fuchsia-700/30 group-hover:bg-white/50 dark:group-hover:bg-fuchsia-700/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-fuchsia-700/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white-700 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-fuchsia-700/30 group-hover:bg-white/50 dark:group-hover:bg-fuchsia-700/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-fuchsia-700/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white-700 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Rovers;
