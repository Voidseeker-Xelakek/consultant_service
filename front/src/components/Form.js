import React from "react";
import Ques2 from "./Ques2";

export function Form({ questions, onAnswer, recomendations, indexes }) {
  return (
    <main className="form-container">
      <h1>Анкета</h1>
      <div>
        <Ques2
          questionsList={questions}
          onAnswer={onAnswer}
          recomendations={recomendations}
          indexes={indexes}
        />
      </div>
    </main>
  );
}

export default Form;
