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
  const link1 =
    '<a href="https://наш.дом.рф/" target="_blank" rel="noopener noreferrer">наш.дом.рф</a>';

  const linkRegex2 =
    /ч\. 2 ст\. 3\.1 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link2 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/302aa518a2c33dfc84a296f1d109dfe94e35097c/" target="_blank" rel="noopener noreferrer">ч. 2 ст. 3.1 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex3 =
    /ч\. 1 ст\. 3 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link3 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/24a7b7f2b0571ac53f7b789c337316109c23d1a7/" target="_blank" rel="noopener noreferrer">ч. 1 ст. 3 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex4 = /ст\. 222 Гражданского Кодекса РФ/g;
  const link4 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_5142/f670878d88ab83726bd1804b82668b84b027802e/" target="_blank" rel="noopener noreferrer">ст. 222 Гражданского Кодекса РФ</a>';

  const linkRegex5 = /ст\. 51 Градостроительного Кодекса РФ/g;
  const link5 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51040/570afc6feff03328459242886307d6aebe1ccb6b/" target="_blank" rel="noopener noreferrer">ст. 51 Градостроительного Кодекса РФ</a>';

  const linkRegex6 = /ст\. 619 Гражданского Кодекса РФ/g;
  const link6 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_9027/0f3b9f7e1408dd048a2b10e50a7f1c1b3aef1244/" target="_blank" rel="noopener noreferrer">ст. 619 Гражданского Кодекса РФ</a>';

  const linkRegex7 = /ст\. 39\.10 Земельного Кодекса РФ/g;
  const link7 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_33773/f6fb5e26212db7c34ed9e1fc1e33a10f57b19470/" target="_blank" rel="noopener noreferrer">ст. 39.10 Земельного Кодекса РФ</a>';

  let replacedText = text;

  if (linkRegex1.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex1, link1);
  }

  if (linkRegex2.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex2, link2);
  }

  if (linkRegex3.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex3, link3);
  }

  if (linkRegex4.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex4, link4);
  }

  if (linkRegex5.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex5, link5);
  }

  if (linkRegex6.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex6, link6);
  }

  if (linkRegex7.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex7, link7);
  }

  return replacedText;
}
