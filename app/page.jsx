"use client";
import { useState, useEffect } from "react";
import SpaceQuiz from "@/components/SpaceQuiz";

export default function Home() {
  // States pour stocker le nom d'utilisateur - son rôle - l'affichage des message - le random space fact
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [randomFact, setRandomFact] = useState(null);

  // Titres associés à chaque rôle
  const roleTitles = {
    Scientist: "Doctor",
    Navigator: "Pathfinder",
    Engineer: "Chief Operator",
    Commander: "Commander",
    default: "Crew Member",
  };

  useEffect(() => {
    // Récupération des informations stockées localement
    const storedName = localStorage.getItem("spaceName");
    const storedRole = localStorage.getItem("spaceRole");

    // Si un nom et un rôle sont enregistrés, les utiliser pour afficher le message de bienvenue
    if (storedName && storedRole) {
      setName(storedName);
      setRole(storedRole);
      setShowCongrats(false);
      setShowWelcome(true);
    }

    // Chargement d'un random space fact depuis fichier JSON
    fetch("/data/space-facts.json")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomFact(data[randomIndex]);
      })

      .catch((error) => console.error("Error loading space facts:", error));
  }, []);

  /**
   * Gère la soumission du quiz en mettant à jour l'état avec le nom et le rôle soumis.
   * Affiche temporairement un message de félicitations avant de passer au message de bienvenue.
   */
  const handleQuizSubmit = (submittedName, submittedRole) => {
    setName(submittedName);
    setRole(submittedRole);
    setShowCongrats(true);
    setShowWelcome(false);

    // Masquer le message de félicitations après 3 secondes et afficher le message de bienvenue
    setTimeout(() => {
      setShowCongrats(false);
      setShowWelcome(true);
    }, 3000);
  };

  /**
   * Retourne un badge emoji correspondant au rôle sélectionné.
   */
  const getBadge = (role) => {
    switch (role) {
      case "Commander":
        return "👨‍✈️";
      case "Navigator":
        return "🗺️";
      case "Scientist":
        return "🔬";
      case "Engineer":
        return "🔧";
      default:
        return "🌌";
    }
  };

  return (
    <div className="bg-home flex flex-col items-center justify-center w-full h-full relative flex-grow bg-cover bg-center">
      <div className="flex items-center justify-center px-4 py-2">
        {/* Affichage du message de félicitations après le quiz */}
        {showCongrats && name && role ? (
          <div className="quiz-result flex items-center justify-center">
            <div className="bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-3 py-3 border border-indigo-800 shadow-xl">
              <h2 className="text-2xl font-bold">Congratulations, {name}!</h2>
              <p className="text-lg">
                Your role is: {roleTitles[role] || roleTitles.default}
              </p>
            </div>
          </div>
        ) : showWelcome && name && role ? (
          // Affichage du message de bienvenue avec un random space fact
          <div className="flex flex-col items-center justify-center px-4 py-2">
            <div className="welcome absolute top-20 left-4 flex bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-3 py-3 border border-indigo-800 shadow-xl">
              <h1 className="text-ml font-bold">
                Welcome on board, {roleTitles[role] || roleTitles.default}{" "}
                {name}!
              </h1>
              <span> {getBadge(role)}</span>
            </div>
            <div className="bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-10 py-10 border border-indigo-800 shadow-xl mt-10">
              {randomFact && (
                <div className="space-fact">
                  <h3 className="text-xl font-bold">Random Space Fact:</h3>
                  <h2 className="text-2xl font-semibold">
                    {randomFact.statement}
                  </h2>
                  <p className="text-lg pt-3">{randomFact.explanation}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <SpaceQuiz onSubmit={handleQuizSubmit} />
        )}
      </div>
    </div>
  );
}
