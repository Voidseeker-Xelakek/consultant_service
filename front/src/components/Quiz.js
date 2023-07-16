import React from "react";

export default function Quiz() {
  return (
    <form className="quiz">
      <p>Выберите, какой вид недвижимости вы хотите проверить:</p>
      <div>
        <label>
          <input className="quizRadio" type="radio" name="myRadio" value="No" />
          Первичное жилье
        </label>
        <label>
          <input className="quizRadio" type="radio" name="myRadio" value="No" />
          Вторичное жилье
        </label>
      </div>
    </form>
  );
}
