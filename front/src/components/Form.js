import React, { useState } from "react";
import Ques2 from "./Ques2";
import Recomendations from "./Recomendations";

export function Form({
  questions,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
}) {
  const [skipAll, setSkipAll] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [returnAll, setReturnAll] = useState(false);

  const handleSkipAll = () => {
    if (showRecommendations) {
      setShowRecommendations(false);
      setReturnAll(false);
    } else {
      setSkipAll(true);
      setShowRecommendations(true);
    }
  };

  const handleReturnAll = () => {
    setReturnAll(true);
  };

  return (
    <main className="form-container">
      <div>
        {!skipAll && !returnAll && (
          <button onClick={handleSkipAll}>
            {showRecommendations
              ? "Вернуться к вопросам"
              : "Пропустить все вопросы"}
          </button>
        )}
        {showRecommendations && (
          <Recomendations recomendations={recomendations} indexes={indexes} />
        )}
        <Ques2
          questionsList={questions}
          onAnswer={onAnswer}
          lastAnswer={lastAnswer}
          recomendations={recomendations}
          indexes={indexes}
          skipAll={skipAll}
          returnAll={returnAll}
        />
        {skipAll && !returnAll && (
          <button className="skipButton" onClick={handleReturnAll}>
            Вернуться к предыдущим вопросам
          </button>
        )}
      </div>
    </main>
  );
}

export default Form;
