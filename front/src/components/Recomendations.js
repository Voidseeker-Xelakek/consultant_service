import React from "react";

export default function Recomendations({ Recomendations }) {
  console.log(Recomendations);
  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {Recomendations.map((el, i) => (
        <div key={i} className="shortRecomandation">
          {el.shortText}
        </div>
      ))}
    </div>
  );
}
