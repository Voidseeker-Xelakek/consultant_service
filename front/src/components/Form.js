import React, { useState } from "react";
import AdditionVisibility from "./AdditionVisibility";
import { allQuestions, answerTypes } from "../data/questions";
import Recomendations from "./Recomendations";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";

export function Form({
  onAnswer,
  currentQuestion,
  recommendations,
  onQuestionBack,
  onQuestionRestart,
}) {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const question = allQuestions.find((aq) => aq.id === currentQuestion);
  const answers =
    typeof question == "undefined" ? 0 : answerTypes[question.answerType];
  return (
    <main className="form-container">
      <div>
        <div className="component-container">
          {showRecommendations ? (
            <Recomendations recommendations={recommendations} />
          ) : (
            <div className="question">
              {!question && (
                <Recomendations recommendations={recommendations} />
              )}
              {question && (
                <div className="mainQuestion">
                  <p>
                    <ReactMarkdown
                      components={{
                        a: Anchor,
                      }}
                    >
                      {question.text}
                    </ReactMarkdown>
                  </p>
                  {question.addition && (
                    <AdditionVisibility>
                      <ReactMarkdown
                        components={{
                          a: Anchor,
                        }}
                      >
                        {question.addition}
                      </ReactMarkdown>
                    </AdditionVisibility>
                  )}
                  {answers.map((a, i) => {
                    const key = question.id + i * 100;
                    return (
                      <label>
                        <input
                          type="radio"
                          defaultChecked={false}
                          key={key}
                          onClick={(e) =>
                            onAnswer(
                              currentQuestion,
                              +e.target.value,
                              question.next[+e.target.value]
                            )
                          }
                          name={question.id.toString()}
                          value={i.toString()}
                        />
                        {a}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {question && (
            <button
              className="showQuesBtn"
              onClick={() => setShowRecommendations((prev) => !prev)}
            >
              {showRecommendations
                ? "Вернуться к вопросам"
                : "Пропустить вопросы"}
            </button>
          )}
          {currentQuestion !== 1 && (
            <button className="showQuesBtn" onClick={() => onQuestionBack()}>
              Назад
            </button>
          )}
          {currentQuestion !== 1 && (
            <button className="showQuesBtn" onClick={() => onQuestionRestart()}>
              Начать анкету заново
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default Form;
