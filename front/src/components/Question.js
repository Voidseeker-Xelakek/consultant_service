import React, { useState } from "react";
import Recomendations from "./Recomendations";

export let recsIndexes = [];

const mediumIndexDict = {
  1: [1, 2],
  2: [3, 4],
  3: [6, 7],
  4: [8, 9],
  5: [10, 11],
  6: [12, 13],
  7: [14, 15],
  8: [16, 17],
  9: [18, 19],
  10: [20, 21],
  11: [22, 23],
};

const seondMinorIndexDict = {
  1: [28, 27],
  2: [29, 27],
  3: [30, 27],
  4: [31, 27],
  5: [33, 32],
  6: [34, 32],
  7: [35, 32],
  8: [36, 32],
};

export function Question({ questionsList, onAnswer, recomendations, indexes }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleYesClick = (value, id) => {
    setCurrentQuestion(currentQuestion + value);
    if (id) {
      onAnswer(id);
    }
  };

  const renderQuestion = () => {
    const questions = questionsList;
    const question = questions[currentQuestion];
    if (!question) {
      return (
        <div>
          <h1>Спасибо за ответы</h1>
          <Recomendations recomendations={recomendations} indexes={indexes} />
        </div>
      );
    }

    if (question.type === "main" && question.id === 1) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(19, 24)}
                name={question.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(19, 24)}
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question.type === "main" && question.id === 2) {
      // для main где много вариантов
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Право собственности
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100, 37)}
                name={question.id.toString()}
                value="Skip"
              />
              Право бессрочного пользования
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(5)}
                name={question.id.toString()}
                value="Skip"
              />
              Право аренды
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100, 25)}
                name={question.id.toString()}
                value="Skip"
              />
              Данная информация отсутствует
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100, 26)}
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question.type === "superMinor") {
      // для медиумов (да нет скип)
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1, 5)}
                name={question.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1, 4)}
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question.type === "medium" && question.id === 1) {
      // для медиумов (да нет объекты скип)
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict[question.id][0]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Skip"
              />
              Данные объекты отсутствуют
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict[question.id][1]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (question.type === "medium" && question.id === 2) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(8, onAnswer(mediumIndexDict[question.id][0]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(8, onAnswer(mediumIndexDict[question.id][1]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question.type === "medium" &&
      question.id !== 1 &&
      question.id !== 2
    ) {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict[question.id][0]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, onAnswer(mediumIndexDict[question.id][1]))
                }
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    }

    // -------------------------------------------------------------------------------------
    else if (
      question.type === "minor" &&
      question.mainType === 1 &&
      question.id !== 6
    ) {
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(8 - question.id, onAnswer(5))}
                name={question.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(8 - question.id, onAnswer(4))}
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question.type === "minor" &&
      question.mainType === 1 &&
      question.id === 6
    ) {
      // для миноров
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(2)}
                name={question.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(2, 4)}
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question.type === "minor" &&
      question.mainType === 2 &&
      question.id === 4
    ) {
      // для миноров
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(100)}
                name={question.id.toString()}
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
                    onAnswer(seondMinorIndexDict[question.id][0])
                  )
                }
                name={question.id.toString()}
                value="No"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    100,
                    onAnswer(seondMinorIndexDict[question.id][1])
                  )
                }
                name={question.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
          </div>
        </div>
      );
    } else if (
      question.type === "minor" &&
      question.mainType === 2 &&
      question.id !== 4
    ) {
      // для миноров
      return (
        <div className="question">
          <div className="otherQuestion">
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(1)}
                name={question.id.toString()}
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
                    onAnswer(seondMinorIndexDict[question.id][0])
                  )
                }
                name={question.id.toString()}
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
                    onAnswer(seondMinorIndexDict[question.id][1])
                  )
                }
                name={question.id.toString()}
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
