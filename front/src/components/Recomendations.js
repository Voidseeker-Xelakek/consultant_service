import React from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { recsIndexes } from "./Question";

export default function Recomendations({ Recomendations, indexes }) {
  console.log(indexes);
  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {Recomendations.map((el, i) => (
        <div key={i} className="shortRecomandation">
          {indexes.includes(el.id) && el.id}
          {indexes.includes(el.id) && el.shortText}
          {el.longText !== null && indexes.includes(el.id) && (
            <AdditionVisibility>
              <Addition Addition={el.longText} />
            </AdditionVisibility>
          )}
        </div>
      ))}
    </div>
  );
}



