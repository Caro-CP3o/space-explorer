"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.3, ease: "Power4.easeInOut" },
    });

    // Page Transition Animation
    tl.set(frameRef.current, { x: "0%" }) // Frame starts covering the entire page
      .to(frameRef.current, { x: "-100%" }) // Frame slides away
      .to(containerRef.current, { autoAlpha: 1 }, "-=1.0"); // Fade in new content during the frame slide

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div className="relative flex items-center justify-center grow w-full mx-auto">
      {/* Transition Frame */}
      <div
        ref={frameRef}
        className="fixed inset-0 bg-indigo-950 z-30 transform"
      ></div>

      {/* Page Content */}
      <div
        className="relative w-full opacity-0"
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
