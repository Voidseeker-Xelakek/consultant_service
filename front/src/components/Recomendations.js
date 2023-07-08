import React from "react";
import ToggleVisibility from "./ToggleVisibility";
import Addition from "./Addition";

export default function Recomendations({ Recomendations }) {
  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {Recomendations.map((el, i) => (
        <div
          key={i}
          className="shortRecomandation"
        >
          <p style={{ wordWrap: "break-word" }}>{el.id}. {el.shortText}</p>
          {el.longText !== null && (
            <ToggleVisibility>
              <Addition Addition={el.longText} />
            </ToggleVisibility>
          )}
        </div>
      ))}
    </div>
  );
}



