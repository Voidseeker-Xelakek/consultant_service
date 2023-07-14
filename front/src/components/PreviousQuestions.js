import React from "react";

export default function PreviousQuestions({ allQuestions, prevQuestions }) {
  console.log(prevQuestions);
  console.log(
    prevQuestions.some((item) => {
      return JSON.stringify(item) === JSON.stringify([1, "main"]);
    })
  );

  return (
    <div className="form">
      <h1>Анкета</h1>
      {allQuestions.map((el, i) => (
      <div key={i} className="questions">
      {prevQuestions.some(item => item[0] === el.id && item[1] === el.type) && (
      <div className="questions-item">
        <span className="questions-text">{el.text}</span>
        <span className="questions-answer">
          {prevQuestions.find(item => item[0] === el.id && item[1] === el.type)[2]}
        </span>
      </div>
    )}
  </div>
))}
    </div>
  );
}
