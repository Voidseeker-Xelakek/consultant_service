import React, { useState } from "react";
import Ques2 from "./Ques2";
import QuestionVisibility from "./QuestionVisability";

export function Form({
  questions,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
}) {
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [currentQuestion2, setCurrentQuestion2] = useState(0);
  const [currentQuestion3, setCurrentQuestion3] = useState(0);

  return (
    <main className="form-container">
      <div>
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
