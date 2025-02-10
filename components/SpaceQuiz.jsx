import { useState } from "react";

const SpaceQuiz = ({ onSubmit }) => {
  // State pour stocker le user name
  const [name, setName] = useState("");
  // State pour stocker les réponses sélectionnées dans le quiz
  const [formData, setFormData] = useState({});

  // Données du quiz avec questions et réponses associées à un rôle spécifique
  const quizData = [
    {
      question: "What's your favorite activity?",
      answers: [
        { text: "Organizing things", role: "Commander" },
        { text: "Solving puzzles", role: "Navigator" },
        { text: "Exploring new places", role: "Scientist" },
        { text: "Crafting and fixing things", role: "Engineer" },
      ],
    },
    {
      question: "What's your favorite color?",
      answers: [
        { text: "Navy Blue", role: "Navigator" },
        { text: "Purple", role: "Engineer" },
        { text: "Magenta", role: "Commander" },
        { text: "Tangerine", role: "Scientist" },
      ],
    },
    {
      question: "What would you bring on a deserted planet?",
      answers: [
        { text: "A compass", role: "Navigator" },
        { text: "A water test kit", role: "Scientist" },
        { text: "A swiss army knife ", role: "Engineer" },
        { text: "The Lord of the Rings's trilogy", role: "Commander" },
      ],
    },
    {
      question: "What's your favorite animal?",
      answers: [
        { text: "Cat", role: "Navigator" },
        { text: "Fox", role: "Engineer" },
        { text: "Wolf", role: "Commander" },
        { text: "Homo Sapiens", role: "Scientist" },
      ],
    },
  ];

  // Fonction pour gérer les changements dans les réponses du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // on extrait les roles des choix du formulaire et on calcule le + fréquent
    const roles = Object.values(formData);
    const mostCommonRole = roles.reduce(
      (acc, role) => {
        acc[role] = (acc[role] || 0) + 1;
        if (acc[role] > acc.maxCount) {
          acc.mostFrequent = role;
          acc.maxCount = acc[role];
        }
        return acc;
      },
      { mostFrequent: "", maxCount: 0 }
    ).mostFrequent;

    // Stockage du nom et du rôle déterminé dans le localStorage
    localStorage.setItem("spaceName", name);
    localStorage.setItem("spaceRole", mostCommonRole);

    // Appel de la fonction onSubmit avec les informations de l'utilisateur
    onSubmit(name, mostCommonRole);
  };

  // Affichage du formulaire avec boucle sur quizData pour générer les questions dynamiquement - bouton envoi désactivé si form par rempli
  return (
    <form
      onSubmit={handleSubmit}
      className="space-quiz bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-3 py-3 border border-indigo-800 shadow-xl text-lg mt-12 mb-6"
    >
      <div className="quiz-intro flex flex-col items-center justify-center px-3 py-3">
        <h2 className="uppercase font-bold">Welcome Space Explorer!</h2>
        <p className="py-3">Please enter your name to begin your journey :</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter your name"
          required
          className="quiz-input text-indigo-950 bg-white/75 px-2 py-2 rounded-xl border border-grey-500 shadow-xl"
        />
      </div>
      {quizData.map((quiz, index) => (
        <div key={index} className="quiz-question">
          <h3 className="px-3 py-2 uppercase font-bold bg-purple-900 bg-opacity-50 rounded w-fit">
            {quiz.question}
          </h3>
          {quiz.answers.map((answer) => (
            <label key={answer.role} className="quiz-option px-3 py-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={answer.role}
                onChange={handleInputChange}
                required
              />
              {answer.text}
            </label>
          ))}
        </div>
      ))}
      <div className="flex flex-col items-center justify-center px-3 py-3">
        <button
          type="submit"
          disabled={!name || Object.keys(formData).length < quizData.length}
          className="submit-quiz bg-indigo-500 px-3 py-2 rounded-xl border border-grey-500 shadow-xl"
        >
          Send to Ground Control
        </button>
      </div>
    </form>
  );
};

export default SpaceQuiz;
