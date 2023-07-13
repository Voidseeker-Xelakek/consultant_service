import React, { useState } from "react";
import Question from "./Question";
import Ques3 from "./Ques3";

export let recsIndexes = [];

const mediumIndexDict2 = {
  1: [1, 1],
  2: [7],
  3: [7],
};

const MinorIndexDict2 = {
  1: [2, 1],
  2: [3, 1],
  3: [4, 1],
  4: [5, 1],
  5: [6, 1],
  6: [14, 15],
  7: [8, 8],
  8: [8, 8],
};

const superMinorIndexDict2 = {
  1: [9, 8],
  2: [10, 8],
  3: [11, 8],
  4: [12, 8],
  5: [9, 8],
  6: [10, 8],
  7: [11, 8],
  8: [12, 8],
};

let toAsk = [];

export function Ques2({
  questionsList,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleYesClick = (value, id, questionId, questionType) => {
    if (value === "Даня" || value === "Галя") {
      toAsk.push(value);
      setCurrentQuestion(currentQuestion + 100);
    } else {
      setCurrentQuestion(currentQuestion + value);
      if (id) {
        onAnswer(id);
      }
    }
    lastAnswer(questionId, questionType);
  };

  const renderQuestion = () => {
    const questions2 = questionsList[1];
    const question2 = questions2[currentQuestion];
    if (!question2 && toAsk.includes("Даня")) {
      console.log("lel");
      return (
        <Question
          questionsList={questionsList[0]}
          onAnswer={onAnswer}
          recomendations={recomendations}
          indexes={indexes}
        />
      );
    } else if (!question2 && toAsk.includes("Галя")) {
      return (
        <Ques3
          questionsList={questionsList[2]}
          onAnswer={onAnswer}
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
                  handleYesClick(1, null, question2.id, question2.type)
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
                  handleYesClick(8, null, question2.id, question2.type)
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
                onClick={() => handleYesClick(1)}
                name={question2.id.toString}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(13)}
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
                onClick={() => handleYesClick("Галя", 13)}
                name={question2.id.toString}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick("Галя")}
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
                onClick={() => handleYesClick(1)}
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
                    onAnswer(mediumIndexDict2[question2.id][0])
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
                    onAnswer(mediumIndexDict2[question2.id][1])
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
                  handleYesClick(2, onAnswer(mediumIndexDict2[question2.id][0]))
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
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
                  handleYesClick(1, onAnswer(mediumIndexDict2[question2.id][0]))
                }
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick("Галя")}
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
                onClick={() => handleYesClick(1)}
                name={question2.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(MinorIndexDict2[question2.id][0]))
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
                  handleYesClick(1, onAnswer(MinorIndexDict2[question2.id][1]))
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
                onClick={() => handleYesClick("Даня")}
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
                    onAnswer(MinorIndexDict2[question2.id][0])
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
                    onAnswer(MinorIndexDict2[question2.id][1])
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
                onClick={() => handleYesClick(1)}
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
                    onAnswer(MinorIndexDict2[question2.id][0])
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
                    onAnswer(MinorIndexDict2[question2.id][1])
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
                onClick={() => handleYesClick(1)}
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
                    onAnswer(superMinorIndexDict2[question2.id][0])
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
                    onAnswer(superMinorIndexDict2[question2.id][1])
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
                    onAnswer(superMinorIndexDict2[question2.id][0])
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
                onClick={() => handleYesClick("Галя")}
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
                    onAnswer(superMinorIndexDict2[question2.id][1])
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
