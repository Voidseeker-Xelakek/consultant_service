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
  const linkRegex1 = /наш\.дом\.рф/g;
  const link1 = '<a href="https://наш.дом.рф/" target="_blank" rel="noopener noreferrer">наш.дом.рф</a>';

  const linkRegex2 = /ч\. 2 ст\. 3\.1 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link2 = '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/302aa518a2c33dfc84a296f1d109dfe94e35097c/" target="_blank" rel="noopener noreferrer">ч. 2 ст. 3.1 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  let replacedText = text;

  if (linkRegex1.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex1, link1);
  }

  if (linkRegex2.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex2, link2);
  }

  return replacedText;
}

