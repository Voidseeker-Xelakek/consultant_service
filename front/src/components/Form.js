import React, { useCallback } from "react";
import Question from "./Question";

export function Form({ questions }) {
  useCallback(() => {
    console.log(questions);
  }, []);
  return (
    <main>
      {questions.map((el, i) => (
        <div key={i}>
          <Question mainQuestion={el} />
          <button>[eq</button>
        </div>
      ))}
    </main>
  );
}

export default Form;
