import React from "react";
import Ques2 from "./Ques2";

export function Form({ questions, onAnswer }) {
  return (
    <main className="form-container">
      <h1>Анкета</h1>
      <div>
        <Ques2 questionsList={questions} onAnswer={onAnswer} />
      </div>
    </main>
  );
}

export default Form;
