import React, { useState } from "react";
import Ques2 from "./Ques2";
import Recomendations from "./Recomendations";
import QuestionVisibility from "./QuestionVisability";

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
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [currentQuestion2, setCurrentQuestion2] = useState(0);
  const [currentQuestion3, setCurrentQuestion3] = useState(0);

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
        {/* {!skipAll && !returnAll && (
          <button className="skipButton" onClick={handleSkipAll}>
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
        )} */}
        <QuestionVisibility recomendations={recomendations} indexes={indexes}>
          <Ques2
            questionsList={questions}
            onAnswer={onAnswer}
            lastAnswer={lastAnswer}
            recomendations={recomendations}
            indexes={indexes}
            setCurrentQuestion1={setCurrentQuestion1}
            currentQuestion1={currentQuestion1}
            setCurrentQuestion2={setCurrentQuestion2}
            currentQuestion2={currentQuestion2}
            setCurrentQuestion3={setCurrentQuestion3}
            currentQuestion3={currentQuestion3}
          />
        </QuestionVisibility>
      </div>
    </main>
  );
}

export default Form;
