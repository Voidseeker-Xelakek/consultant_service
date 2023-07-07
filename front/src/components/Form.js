import React, { useCallback } from "react";
import Question from "./Question";

export function Form({ Questions }) {
  useCallback(() => {
    console.log(Questions);
  }, []);
  const mainQuestions = Questions[0];
  const firstMediumQuestions = Questions[1];
  const firstMinorQuestions = Questions[2];
  const secondMinorFirstQuestions = Questions[3];
  const secondMinorSecondQuestions = Questions[4];
  return (
    <main>
      <div>
        {mainQuestions.map((el, i) => (
          <div key={i}>
            <Question Question={el} />
            <button>[eq</button>
          </div>
        ))}
      </div>
      <div>
        {firstMediumQuestions.map((el, i) => (
          <div key={i}>
            <Question Question={el} />
            <button>[eq</button>
          </div>
        ))}
      </div>
      <div>
        {firstMinorQuestions.map((el, i) => (
          <div key={i}>
            <Question Question={el} />
            <button>[eq</button>
          </div>
        ))}
      </div>
      <div>
        {secondMinorFirstQuestions.map((el, i) => (
          <div key={i}>
            <Question Question={el} />
            <button>[eq</button>
          </div>
        ))}
      </div>
      <div>
        {secondMinorSecondQuestions.map((el, i) => (
          <div key={i}>
            <Question Question={el} />
            <button>[eq</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Form;
