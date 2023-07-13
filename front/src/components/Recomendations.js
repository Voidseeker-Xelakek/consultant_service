import React from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";

export default function Recomendations({ recomendations, indexes }) {
  console.log(indexes);
  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {recomendations.map((el, i) => (
        <div key={i} className="shortRecomandation">
          {indexes.includes(el.id) && (
            <div className="recommendation-item">
              <span className="recommendation-id">{el.id}.</span>{" "}
              <span className="recommendation-text">{el.shortText}</span>
              {el.longText !== null && (
                <AdditionVisibility>
                  <Addition addition={el.longText} />
                </AdditionVisibility>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
