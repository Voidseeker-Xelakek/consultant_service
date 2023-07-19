import React, { useState } from "react";
import Recomendations from "./Recomendations";

export default function QuestionVisibility({
  children,
  recomendations,
  indexes,
}) {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showRecommendations, setShowRecommendations] = useState(false);
  function toggleShow() {
    setShowQuestion(!showQuestion);
    setShowRecommendations(!showRecommendations);
  }
  var buttonText = showQuestion ? "Пропустить вопросы" : "Вернуться к вопросам";

  return (
    <div className="component-container">
      {showQuestion && children}
      {showRecommendations && (
        <Recomendations recomendations={recomendations} indexes={indexes} />
      )}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
