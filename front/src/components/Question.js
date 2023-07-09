import React from "react";

export let recsIndexes = [];

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
              onClick={() => onAnswer(1)}
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
              onClick={() => onAnswer(2)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------------------------
  else if (question.type === "medium" && question.id === 2) {
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
              onClick={() => onAnswer(3)}
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
  } else if (question.type === "medium" && question.id === 3) {
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
              onClick={() => onAnswer(6)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(7)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 4) {
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
              onClick={() => onAnswer(8)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(9)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 5) {
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
              onClick={() => onAnswer(10)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(11)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 6) {
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
              onClick={() => onAnswer(12)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(13)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 7) {
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
              onClick={() => onAnswer(14)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(15)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 8) {
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
              onClick={() => onAnswer(16)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(17)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 9) {
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
              onClick={() => onAnswer(18)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(19)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 10) {
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
              onClick={() => onAnswer(20)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(21)}
              name={question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (question.type === "medium" && question.id === 11) {
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
              onClick={() => onAnswer(22)}
              name={question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(23)}
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
  } else if (
    question.type === "minor" &&
    question.mainType === 2 &&
    question.order === 1 &&
    question.id === 1
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
            <input
              type="radio"
              onClick={() => onAnswer(28)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(27)}
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
    question.order === 1 &&
    question.id === 2
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
            <input
              type="radio"
              onClick={() => onAnswer(29)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(27)}
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
    question.order === 1 &&
    question.id === 3
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
            <input
              type="radio"
              onClick={() => onAnswer(30)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(27)}
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
    question.order === 1 &&
    question.id === 4
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
            <input
              type="radio"
              onClick={() => onAnswer(31)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(27)}
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
    question.order === 2 &&
    question.id === 1
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
            <input
              type="radio"
              onClick={() => onAnswer(33)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(32)}
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
    question.order === 2 &&
    question.id === 2
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
            <input
              type="radio"
              onClick={() => onAnswer(34)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(32)}
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
    question.order === 2 &&
    question.id === 3
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
            <input
              type="radio"
              onClick={() => onAnswer(35)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(32)}
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
    question.order === 2 &&
    question.id === 4
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
            <input
              type="radio"
              onClick={() => onAnswer(36)}
              name={question.id.toString()}
              value="No"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(32)}
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
