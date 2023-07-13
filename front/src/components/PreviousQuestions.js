import React from "react";

export default function PreviousQuestions({ allQuestions, prevQuestions }) {
  return (
    <div className="form">
      <h1>Анкета</h1>
      {allQuestions.map((el, i) => (
        <div key={i} className="questions">
          {prevQuestions.includes(el.id) && (
            <div className="questions-item">
              <span className="questions-text">{el.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
