import React from "react";

export default function PreviousQuestions({ allQuestions, prevQuestions }) {
  const questions = [
    ...allQuestions[1],
    ...allQuestions[0],
    ...allQuestions[2],
  ];
  return (
    <div className="form">
      <h1>Анкета</h1>
      {questions.map((el, i) => (
        <div key={i} className="questions">
          {prevQuestions.some(
            (item) =>
              item[0] === el.id && item[1] === el.type && item[3] === el.person
          ) && (
            <div className="questions-item">
              <span className="questions-text">{el.text}</span>
              <span className="questions-answer">
                {
                  prevQuestions.find(
                    (item) =>
                      item[0] === el.id &&
                      item[1] === el.type &&
                      item[3] === el.person
                  )[2]
                }
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
