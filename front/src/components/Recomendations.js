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

  const linkRegex8 = /ч\. 4 ст\. 4 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link8 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/6837eb5962d010b4c55b5544c6cc4415019883b5/" target="_blank" rel="noopener noreferrer">ч. 4 ст. 4 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex9 = /ч\. 2 ст\. 6 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link9 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/817620cd3c49f19912fc1ac0f98b10d17f65b75b/" target="_blank" rel="noopener noreferrer">ч. 2 ст. 6 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex10 = /ст\. 9 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link10 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/ec477af1fa0c9ca283f1c6b7e9262650fdc94940/" target="_blank" rel="noopener noreferrer">ст. 9 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex11 = /ч\. 5 ст\. 8 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link11 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/49cb99b1bfe1a09caaf585874de97bdb34fc6d48/" target="_blank" rel="noopener noreferrer">ч. 5 ст. 8 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex12 = /Постановлении Правительства РФ № 480/g;
  const link12 =
    '<a href="https://docs.cntd.ru/document/554275839?marker=7D20K3" target="_blank" rel="noopener noreferrer">Постановлении Правительства РФ № 480</a>';

  const linkRegex13 = /ст\. 429 Гражданского Кодекса РФ/g;
  const link13 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_5142/97b643126817ac88d7d189c4e90a598045ca555c/" target="_blank" rel="noopener noreferrer">ст. 429 Гражданского Кодекса РФ</a>';

  const linkRegex14 = /ст\. 381 Гражданского Кодекса РФ/g;
  const link14 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_5142/f9658bf38181daad404c799a289d3df11ae5fd33/" target="_blank" rel="noopener noreferrer">ст. 381 Гражданского Кодекса РФ</a>';

  const linkRegex15 = /Росреестре/g;
  const link15 =
    '<a href="https://rosreestr.gov.ru/eservices/request_info_from_egrn/" target="_blank" rel="noopener noreferrer">Росреестре</a>';

  const linkRegex16 = /ч\. 3 ст\. 4 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
  const link16 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/6837eb5962d010b4c55b5544c6cc4415019883b5/" target="_blank" rel="noopener noreferrer">ч. 3 ст. 4 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';

  const linkRegex17 = /ст\. 48 Закона «О государственной регистрации недвижимости» №218-ФЗ/g;
  const link17 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_182661/dac27a09269eef4667312b67231518014c5a6544/" target="_blank" rel="noopener noreferrer">ст. 48 Закона «О государственной регистрации недвижимости» №218-ФЗ</a>';

  const linkRegex18 = /пар\. 7 Закона «О банкротстве» №127-ФЗ/g;
  const link18 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/a224bd419e2ed404aaf174a3172a88eb856f5de0/" target="_blank" rel="noopener noreferrer">пар. 7 Закона «О банкротстве» №127-ФЗ</a>';

  const linkRegex19 = /ч\. 1 ст\. 201\.4/g;
  const link19 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/598c5dad9755936f4af45ac55ac31c2785f2d514/" target="_blank" rel="noopener noreferrer">ч. 1 ст. 201.4</a>';

  const linkRegex20 = /п\. 1 ч\. 1 ст\. 201\.8 Закона «О банкротстве» №127-ФЗ/g;
  const link20 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/88036f6cdff76a9b60c644f4fe3df49f943fd4c2/" target="_blank" rel="noopener noreferrer">п. 1 ч. 1 ст. 201.8 Закона «О банкротстве» №127-ФЗ</a>';

  const linkRegex21 = /Реестр требований участников строительства/g;
  const link21 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/533a3bd27350eecb27de6e40b9e6e164a9199de6/" target="_blank" rel="noopener noreferrer">Реестр требований участников строительства</a>';

  const linkRegex22 = /ст\. 3/g;
  const link22 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/a7a4a813672c6255bd00b9323a768b1892c97cda/" target="_blank" rel="noopener noreferrer">ст. 3</a>';

  const linkRegex23 = /ч\. 2 ст\. 6/g;
  const link23 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/3fe8d4aaca9650ba62c13ae54fcab444cc149ef2/" target="_blank" rel="noopener noreferrer">ч. 2 ст. 6</a>';

  const linkRegex24 = /ФССП/g;
  const link24 =
    '<a href="https://fssp.gov.ru/iss/ip" target="_blank" rel="noopener noreferrer">ФССП</a>';

  const linkRegex25 = /ч\. 2 ст\. 6 Закона «О банкротстве» №127-ФЗ/g;
  const link25 =
    '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/3fe8d4aaca9650ba62c13ae54fcab444cc149ef2/" target="_blank" rel="noopener noreferrer">ч. 2 ст. 6 Закона «О банкротстве» №127-ФЗ</a>';

  const linkRegex26 = /ФНС/g;
  const link26 =
    '<a href="https://egrul.nalog.ru/index.html" target="_blank" rel="noopener noreferrer">ФНС</a>';

  const linkRegex27 = /Картотека арбитражных дел/g;
  const link27 =
    '<a href="https://kad.arbitr.ru/" target="_blank" rel="noopener noreferrer">Картотека арбитражных дел</a>';

  const linkRegex28 = /ГАС «Правосудие»/g;
  const link28 =
    '<a href="https://ej.sudrf.ru/" target="_blank" rel="noopener noreferrer">ГАС «Правосудие»</a>';
  
  const linkRegex29 = /Судебные и нормативные акты РФ (СудАкт)/g;
  const link29 =
    '<a href="https://sudact.ru/" target="_blank" rel="noopener noreferrer">Судебные и нормативные акты РФ (СудАкт)</a>';
  
  const linkRegex30 = /Едином реестре застройщиков/g;
  const link30 =
    '<a href="https://наш.дом.рф/сервисы/единый-реестр-застройщиков" target="_blank" rel="noopener noreferrer">Едином реестре застройщиков</a>';
  
  const linkRegex31 = /Единого реестра проблемных объектов/g;
  const link31 =
    '<a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%BD%D1%8B%D1%85-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2?objectIds=40822%2C48104%2C41069" target="_blank" rel="noopener noreferrer">Единого реестра проблемных объектов</a>';

  const linkRegex32 = /Главного управления государственного строительного надзора Московской области/g;
  const link32 =
    '<a href="https://gusn.mosreg.ru/deyatelnost/reestr-zablokirovannykh-zastroishikov" target="_blank" rel="noopener noreferrer">Главного управления государственного строительного надзора Московской области</a>';
  
  
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

  if (linkRegex8.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex8, link8);
  }

  if (linkRegex9.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex9, link9);
  }

  if (linkRegex10.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex10, link10);
  }

  if (linkRegex11.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex11, link11);
  }

  if (linkRegex12.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex12, link12);
  }

  if (linkRegex13.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex13, link13);
  }

  if (linkRegex14.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex14, link14);
  }

  if (linkRegex15.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex15, link15);
  }

  if (linkRegex16.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex16, link16);
  }

  if (linkRegex17.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex17, link17);
  }

  if (linkRegex18.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex18, link18);
  }

  if (linkRegex19.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex19, link19);
  }

  if (linkRegex20.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex20, link20);
  }

  if (linkRegex21.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex21, link21);
  }

  if (linkRegex22.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex22, link22);
  }

  if (linkRegex23.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex23, link23);
  }

  if (linkRegex24.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex24, link24);
  }

  if (linkRegex25.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex25, link25);
  }

  if (linkRegex26.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex26, link26);
  }

  if (linkRegex27.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex27, link27);
  }

  if (linkRegex28.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex28, link28);
  }

  if (linkRegex29.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex29, link29);
  }

  if (linkRegex30.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex30, link30);
  }

  if (linkRegex31.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex31, link31);
  }

  if (linkRegex32.test(replacedText)) {
    replacedText = replacedText.replace(linkRegex32, link32);
  }

  return replacedText;
}
