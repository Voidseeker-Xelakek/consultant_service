import React, { useState, useEffect } from "react";
import Recomendations from "./Recomendations";

export let recsIndexes = [];

const mediumIndexDict3 = {
  1: [54, 53],
  2: [55, 53],
  3: [56, 53],
  4: [57, 53],
  5: [58, 58],
};

let toAsk = [];

export function Ques3({
  questionsList,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
  skipAll
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (skipAll) {
      setCurrentQuestion(questionsList.length + 100);
    }
  }, [skipAll]);

  const handleYesClick = (
    value,
    id,
    questionId,
    questionType,
    questionAnswer
  ) => {
    if (skipAll) {
      setCurrentQuestion(questionsList.length + 100); // Пропустить все вопросы
    }
    else {
    setCurrentQuestion(currentQuestion + value);
    if (id) {
      onAnswer(id);
    }
  }
    lastAnswer(questionId, questionType, questionAnswer, 3);
  };

  const renderQuestion = () => {
    const questions3 = questionsList;

    const question3 = questions3[currentQuestion];
    if (!question3) {
      return (
        <div>
          <h1>Спасибо за ответы</h1>
          <Recomendations recomendations={recomendations} indexes={indexes} />
        </div>
      );
    }

    if (question3.type === "main") {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question3.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(100, 53, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question3.id, question3.type, " Нет")
                }
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
                onClick={() =>
                  handleYesClick(1, null, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    1,
                    onAnswer(mediumIndexDict3[question3.id][0]),
                    question3.id,
                    question3.type,
                    " Нет"
                  )
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
                  handleYesClick(
                    1,
                    onAnswer(mediumIndexDict3[question3.id][1]),
                    question3.id,
                    question3.type,
                    " Пропустить"
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
    } else if (question3.type === "medium" && question3.id === 5) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question3.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(100, 58, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    100,
                    null,
                    question3.id,
                    question3.type,
                    " Нет"
                  )
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
                  handleYesClick(
                    100,
                    onAnswer(mediumIndexDict3[question3.id][1]),
                    question3.id,
                    question3.type,
                    " Пропустить"
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

export default Ques3;
