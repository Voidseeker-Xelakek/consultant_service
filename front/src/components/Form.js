import React from "react";
import Ques2 from "./Ques2";

export function Form({
  questions,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
}) {
  return (
    <main className="form-container">
      <div>
        <Ques2
          questionsList={questions}
          onAnswer={onAnswer}
          lastAnswer={lastAnswer}
          recomendations={recomendations}
          indexes={indexes}
        />
      </div>
    </main>
  );
}

export default Form;
