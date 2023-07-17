import React, { useState, useEffect } from "react";
import Question from "./Question";
import Ques3 from "./Ques3";

export let recsIndexes = [];

const mediumIndexDict2 = {
  1: [38, 38],
  2: [44],
  3: [44],
};

const MinorIndexDict2 = {
  1: [39, 38],
  2: [40, 38],
  3: [41, 38],
  4: [42, 38],
  5: [43, 38],
  6: [51, 52],
  7: [45, 45],
  8: [45, 45],
};

const superMinorIndexDict2 = {
  1: [46, 45],
  2: [47, 45],
  3: [48, 45],
  4: [49, 45],
  5: [46, 45],
  6: [47, 45],
  7: [48, 45],
  8: [49, 45],
};

let toAsk = [];

export function Ques2({
  questionsList,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
  skipAll,
  returnAll
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (skipAll) {
      setCurrentQuestion(questionsList.length + 100); // Пропустить все вопросы
    }
    if (returnAll) {
      setCurrentQuestion(0); // Вернуться к первому вопросу
    }
  }, [skipAll, returnAll]);

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
    else if (value === "Даня" || value === "Галя") {
      toAsk.push(value);
      setCurrentQuestion(currentQuestion + 100);
    } else {
      setCurrentQuestion(currentQuestion + value);
      if (id) {
        onAnswer(id);
      }
    }
    lastAnswer(questionId, questionType, questionAnswer, 2);
  };

  const renderQuestion = () => {
    const questions2 = questionsList[1];
    const question2 = questions2[currentQuestion];
    if (!question2 && toAsk.includes("Даня")) {
      return (
        <Question
          questionsList={questionsList[0]}
          onAnswer={onAnswer}
          lastAnswer={lastAnswer}
          recomendations={recomendations}
          indexes={indexes}
        />
      );
    } else if (!question2 && toAsk.includes("Галя")) {
      return (
        <Ques3
          questionsList={questionsList[2]}
          onAnswer={onAnswer}
          lastAnswer={lastAnswer}
          recomendations={recomendations}
          indexes={indexes}
        />
      );
    } else if (!question2) {
      return <h1>Спасибо за ответы</h1>;
    }
    if (question2.type === "main" && question2.id === 1) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(8, null, question2.id, question2.type, " Нет")
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "main" && question2.id === 2) {
      // для main где много вариантов
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(13, null, question2.id, question2.type, " Нет")
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "main" && question2.id === 3) {
      // для main где много вариантов
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    50,
                    question2.id,
                    question2.type,
                    " Да"
                  )
                }
                name={question2.id.toString}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    null,
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "medium" && question2.id === 1) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Даня",
                    onAnswer(mediumIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Даня",
                    onAnswer(mediumIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "medium" && question2.id === 2) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    2,
                    onAnswer(mediumIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Да"
                  )
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Нет")
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "medium" && question2.id === 3) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    1,
                    onAnswer(mediumIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    "Да"
                  )
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    null,
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (
      question2.type === "minor" &&
      question2.mainType === 1 &&
      question2.id !== 6
    ) {
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString()}
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
                    onAnswer(MinorIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    1,
                    onAnswer(MinorIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question2.type === "minor" &&
      question2.mainType === 1 &&
      question2.id === 6
    ) {
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Даня",
                    null,
                    question2.id,
                    question2.type,
                    " Да"
                  )
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Даня",
                    onAnswer(MinorIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Даня",
                    onAnswer(MinorIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question2.type === "minor" && question2.mainType === 2) {
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    onAnswer(MinorIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    onAnswer(MinorIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question2.type === "superMinor" &&
      question2.id !== 4 &&
      question2.id !== 8
    ) {
      // для медиумов (да нет скип)
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question2.id, question2.type, " Да")
                }
                name={question2.id.toString()}
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
                    onAnswer(superMinorIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
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
                    onAnswer(superMinorIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question2.type === "superMinor" &&
      (question2.id === 4 || question2.id === 8)
    ) {
      // для медиумов (да нет скип)
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question2.text}</p>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    onAnswer(superMinorIndexDict2[question2.id][0]),
                    question2.id,
                    question2.type,
                    " Да"
                  )
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    null,
                    question2.id,
                    question2.type,
                    " Нет"
                  )
                }
                name={question2.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    "Галя",
                    onAnswer(superMinorIndexDict2[question2.id][1]),
                    question2.id,
                    question2.type,
                    " Пропустить"
                  )
                }
                name={question2.id.toString()}
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

export default Ques2;
