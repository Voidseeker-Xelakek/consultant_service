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

  function replacedText(text) {
    const linkRegex = /ФССП/g;
    const link =
      '<a href="https://egrul.nalog.ru/index.html" target="_blank" rel="noopener noreferrer">ФССП</a>';

    let replacedText = text;

    if (linkRegex.test(replacedText)) {
      replacedText = replacedText.replace(linkRegex, link);
    }

    return replacedText;
  }

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
            replacedText={replacedText}
          />
        </QuestionVisibility>
      </div>
    </main>
  );
}

export default Form;
