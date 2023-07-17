import React, { useState } from "react";

export default function Instruction() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInstructions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="instuction">
      <button className="instructionButton" onClick={toggleInstructions}>
        Как пользоваться?
      </button>
      {isOpen && (
        <>
          <p>
            Алгоритм работы с инструментом достаточно прост. Все, что Вам
            потребуется, это:
          </p>
          <ul>
            1. Выбрать, что Вы хотите проверить:
            <li>- первичное жилье</li>
            <li>- вторичное жилье</li>
          </ul>
          <p>2. Ответить на ряд вопросов в анкете </p>
          <p>3. Дождаться результатов.</p>
          <p>
            Если на какой-то из вопросов Вы не можете дать ответ сразу, то Вы
            всегда можете вернуться к этому вопросу позже. После прохождения
            опроса Вы получите общую степень риска Вашей сделки и рекомендации
            по ее снижению. При необходимости результаты анкетирования и
            рекомендации Вы можете сохранить, зарегистрировавшись на сайте.
            Также наш инструмент предоставляет возможность просчитать выгоду
            разных вариантов приобретения недвижимости при помощи «Калькулятора
            рисков».
          </p>
        </>
      )}
    </div>
  );
}
