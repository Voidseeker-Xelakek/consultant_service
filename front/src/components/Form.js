import React from "react";
import Question from "./Question";

export function Form({ questions, onAnswer }) {
  return (
    <main className="form-container">
      <h1>Анкета</h1>
      <div>
        <Question questionList={questions} onAnswer={onAnswer} />
      </div>
    </main>
  );
}

export default Form;
