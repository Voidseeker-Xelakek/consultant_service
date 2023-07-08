import React from "react";

export function Question({ Question }) {
  if (Question.type === "main") {
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name="myRadio" value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name="myRadio" value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name="myRadio" value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name="myRadio" value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name="myRadio" value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name="myRadio" value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  }
}

export default Question;
