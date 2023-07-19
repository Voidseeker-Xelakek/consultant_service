import React, { useState } from "react";

export default function PreviousQuestions({ allQuestions, prevQuestions }) {
  const questions = [
    ...allQuestions[1],
    ...allQuestions[0],
    ...allQuestions[2],
  ];

  const [showPrevious, setShowPrevious] = useState(true);
  const handleShowPrevious = () => {
    setShowPrevious(true);
  };

  const handleHidePrevious = () => {
    setShowPrevious(false);
  };

  return (
    <div className="prevForm">
      <h1>Анкета</h1>
      {questions.map((el, i) => (
        <div key={i} className="questions">
          {showPrevious &&
            prevQuestions.some(
              (item) =>
                item[0] === el.id &&
                item[1] === el.type &&
                item[3] === el.person
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
      {prevQuestions.length !== 0 && (
        <div className="prevButtonCont">
          {" "}
          {showPrevious ? (
            <button className="prevButton" onClick={handleHidePrevious}>
              Убрать предыдущие вопросы
            </button>
          ) : (
            <button className="prevButton" onClick={handleShowPrevious}>
              Вывести предыдущие вопросы
            </button>
          )}
        </div>
      )}
    </div>
  );
}
