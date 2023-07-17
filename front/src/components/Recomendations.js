import React from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";

export default function Recomendations({ recomendations, indexes }) {
  console.log(indexes);
  let recommendationNumber = 1;

  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {recomendations.map((el, i) => {
        if (!indexes.includes(el.id)) {
          return null;
        }

        const formattedShortText = el.shortText && replaceLinks(el.shortText);
        const formattedLongText = el.longText && replaceLinks(el.longText);

        const formattedShortTextWithLink = el.shortText && (
          <span dangerouslySetInnerHTML={{ __html: formattedShortText }}></span>
        );

        const formattedLongTextWithLink = el.longText && (
          <span dangerouslySetInnerHTML={{ __html: formattedLongText }}></span>
        );

        return (
          <div key={i} className="shortRecomandation">
            <div className="recommendation-item">
              <span className="recommendation-id">
                {recommendationNumber++})
              </span>{" "}
              <span className="recommendation-text">
                {formattedShortTextWithLink || el.shortText}
              </span>
              {el.longText !== null && (
                <AdditionVisibility>
                  {formattedLongTextWithLink && (
                    <Addition addition={formattedLongTextWithLink} />
                  )}
                </AdditionVisibility>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function replaceLinks(text) {
  return text.replace(
    /https?:\/\/[^\s)]+/g,
    (match) =>
      `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`
  );
}
