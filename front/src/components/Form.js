import React from "react";
import Question from "./Question";

export function Form({ questions, onAnswer }) {
  const questionsList = questions;
  console.log(questionsList);
  return (
    <main className="form-container">
      <h1>Анкета</h1>
      <div>
        {questionsList.map((el, i) => (
          <div key={i}>
            <Question question={el} onAnswer={onAnswer} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Form;
