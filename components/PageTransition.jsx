"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  // Récupère le chemin actuel de la page
  const pathname = usePathname();
  // Références pour les éléments DOM utilisés dans l'animation
  const containerRef = useRef(null); // Conteneur principal du contenu
  const frameRef = useRef(null); // Élément utilisé pour la transition

  useEffect(() => {
    // Création d'une timeline GSAP avec des paramètres par défaut
    const tl = gsap.timeline({
      defaults: { duration: 1.3, ease: "Power4.easeInOut" },
    });

    // Animation de transition entre les pages
    tl.set(frameRef.current, { x: "0%" }) // Positionnement initial du cadre (plein écran)
      .to(frameRef.current, { x: "-100%" }) // Déplacement du cadre vers la gauche pour révéler la nouvelle page
      .to(containerRef.current, { autoAlpha: 1 }, "-=1.0"); // Apparition progressive du contenu pendant la transition (fade in)

    return () => {
      tl.kill(); // Nettoyage de l'animation pour éviter des conflits lors du changement de page
    };
  }, [pathname]); // Exécution à chaque changement d'URL

  return (
    <div className="relative flex items-center justify-center grow w-full mx-auto">
      {/* Transition Frame */}
      <div
        ref={frameRef}
        className="fixed inset-0 bg-indigo-950 z-30 transform"
      ></div>

      {/* Page Content */}
      <div className="relative w-full opacity-0" ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
