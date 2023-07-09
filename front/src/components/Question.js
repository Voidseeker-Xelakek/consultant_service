import React from "react";

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

export function Question({ question, onAnswer }) {
  if (question.type === "main" && question.id === 1) {
    // для main - объекты = пропустить
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{question.text}</p>
          <label>
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(24)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(24)}
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
            <input type="radio" name={question.id.toString} value="Yes" />
            Право собственности
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(37)}
              name={question.id.toString()}
              value="Skip"
            />
            Право бессрочного пользования
          </label>
          <label>
            <input type="radio" name={question.id.toString()} value="Skip" />
            Право аренды
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(25)}
              name={question.id.toString()}
              value="Skip"
            />
            Данная информация отсутствует
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(26)}
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
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(5)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(4)}
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
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(mediumIndexDict[question.id][0])}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input type="radio" name={question.id.toString()} value="Skip" />
            Данные объекты отсутствуют
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(mediumIndexDict[question.id][1])}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id !== 1) {
    // для медиумов (да нет объекты скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{question.text}</p>
          <label>
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(mediumIndexDict[question.id][0])}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(mediumIndexDict[question.id][1])}
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
  else if (question.type === "minor" && question.mainType === 1) {
    // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{question.text}</p>
          <label>
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(5)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(4)}
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
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(4)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "minor" && question.mainType === 2) {
    // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{question.text}</p>
          <label>
            <input type="radio" name={question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(seondMinorIndexDict[question.id][0])}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(seondMinorIndexDict[question.id][1])}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  }
}

export default Question;
