import React, { useState } from "react";
import Ques2 from "./Ques2";

export function Form({
  questions,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
}) {

  const [skipAll, setSkipAll] = useState(false);

  const handleSkipAll = () => {
    setSkipAll(true);
  };
  return (
    <main className="form-container">
      <div>
        <Ques2
          questionsList={questions}
          onAnswer={onAnswer}
          lastAnswer={lastAnswer}
          recomendations={recomendations}
          indexes={indexes}
          skipAll={skipAll}
        />
        {!skipAll && (
          <button onClick={handleSkipAll}>Пропустить все вопросы</button>
        )}
      </div>
    </main>
  );
  
}

export default Form;
