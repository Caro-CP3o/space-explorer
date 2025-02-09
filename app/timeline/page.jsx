"use client";
import { useState, useEffect } from "react";

import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    // Function to handle mousemove and keydown events
    const handleInteraction = () => {
      // Set a delay before hiding the arrow (e.g., 1 second)
      setTimeout(() => {
        setShowArrow(false); // Hide the arrow after the delay
      }, 2500); // 2500 milliseconds = 2.5 second
    };

    // Add event listeners for mouse and keyboard events
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen overflow-x-auto p-8 relative w-full ">
      <Timeline />

      {/* Scroll arrow */}
      {showArrow && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
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