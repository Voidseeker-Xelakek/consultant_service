import React, { useState } from "react";

export let recsIndexes = [];

const mediumIndexDict3 = {
  1: [2, 1],
  2: [3, 1],
  3: [4, 1],
  4: [5, 1],
  5: [6, 6],
};

export function Question({ questionsList, onAnswer }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleYesClick = (value, id) => {
    setCurrentQuestion(currentQuestion + value);
    if (id) {
      onAnswer(id);
    }
  };

  const renderQuestion = () => {
    const questions3 = questionsList;

    const question3 = questions3[currentQuestion];
    if (!question3) {
      return <h1>Спасибо за ответы</h1>;
    }

    if (question3.type === "main") {
      // для main - объекты = пропустить
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question3.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100, 1)}
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question3.type === "medium" && question3.id !== 5) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question3.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict3[question3.id][0]))
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict3[question3.id][1]))
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question3.type === "medium" && question3.id === 5) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question3.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100, 6)}
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100)}
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    100,
                    onAnswer(mediumIndexDict3[question3.id][1])
                  )
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    }
  };
  return <div>{renderQuestion()}</div>;
}

export default Question;
