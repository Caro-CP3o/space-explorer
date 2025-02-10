"use client";
import { useState, useEffect } from "react";

import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  // State pour afficher/masquer la flèche pour indiquer le scroll
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    /**
     * Gère les interactions de l'utilisateur (mouvement de la souris ou pression d'une touche).
     * Après une interaction, la flèche de défilement disparaît après un délai défini.
     */
    const handleInteraction = () => {
      // Définit un délai avant de masquer la flèche (2,5 secondes)
      setTimeout(() => {
        setShowArrow(false); // Masque la flèche quand le délai est écoulé
      }, 2500); // 2500 millisecondes = 2.5 secondes
    };

    // Ajoute des écouteurs d'événements pour détecter les interactions utilisateur
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen relative w-full py-6 ">
      <Timeline />

      {/* Flèche de défilement */}
      {showArrow && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-10 h-10 text-white animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l5-5-5-5"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
