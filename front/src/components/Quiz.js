import React from "react";

export default function Quiz() {
  return (
    <form className="quiz">
      <p>Выберите, какой вид недвижимости вы хотите проверить:</p>
      <label>
        <input type="radio" name="myRadio" value="No" />
        Первичка
      </label>
      <label>
        <input type="radio" name="myRadio" value="No" />
        Вторичка
      </label>
      <p>Выберите, что именно хотите проверить:</p>
      <label>
        <input type="radio" name="myRadio" value="No" />
        Проверка продовца
      </label>
      <label>
        <input type="radio" name="myRadio" value="No" />
        Проверка недвижимости
      </label>
    </form>
  );
}
