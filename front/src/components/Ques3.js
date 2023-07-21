import React, { useState, useEffect } from "react";
import Recomendations from "./Recomendations";
import Addition from "./Addition";
import AdditionVisibility from "./AdditionVisibility";

export let recsIndexes = [];

const mediumIndexDict3 = {
  1: [54, 53],
  2: [55, 53],
  3: [56, 53],
  4: [57, 53],
  5: [58, 58],
};

let toAsk = [];

export function Ques3({
  questionsList,
  onAnswer,
  lastAnswer,
  recomendations,
  indexes,
  skipAll,
  setCurrentQuestion,
  currentQuestion,
}) {
  useEffect(() => {
    if (skipAll) {
      setCurrentQuestion(questionsList.length + 100);
    }
  }, [skipAll]);

  const handleYesClick = (
    value,
    id,
    questionId,
    questionType,
    questionAnswer
  ) => {
    if (skipAll) {
      setCurrentQuestion(questionsList.length + 100); // Пропустить все вопросы
    } else {
      setCurrentQuestion(currentQuestion + value);
      if (id) {
        onAnswer(id);
      }
    }
    lastAnswer(questionId, questionType, questionAnswer, 3);
  };

  const renderQuestion = () => {
    const questions3 = questionsList;

    const question3 = questions3[currentQuestion];

    function replacedText(text) {

      const linkRegex1 = /Законом «О банкротстве» №127-ФЗ/g;
      const link1 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/" target="_blank" rel="noopener noreferrer">Законом «О банкротстве» №127-ФЗ</a>';

      const linkRegex2 = /Едином федеральном реестре сведений о банкротстве/g;
      const link2 =
        '<a href="https://bankrot.fedresurs.ru/" target="_blank" rel="noopener noreferrer">Едином федеральном реестре сведений о банкротстве</a>';
  
      const linkRegex3 = /Единого реестра проблемных объектов/g;
      const link3 =
        '<a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%BD%D1%8B%D1%85-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2?objectIds=40822%2C48104%2C41069" target="_blank" rel="noopener noreferrer">списке Единого реестра проблемных объектов</a>';
      
      const linkRegex4 = /газете «Коммерсантъ»/g;
      const link4 =
        '<a href="https://www.kommersant.ru/" target="_blank" rel="noopener noreferrer">газете «Коммерсантъ»</a>';
 
      const linkRegex5 = /Газета «Коммерсантъ»/g;
      const link5 =
        '<a href="https://www.kommersant.ru/" target="_blank" rel="noopener noreferrer">Газета «Коммерсантъ»</a>';
      
      const linkRegex6 = /Единый федеральный реестр сведений о банкротстве/g;
      const link6 =
        '<a href="https://bankrot.fedresurs.ru/" target="_blank" rel="noopener noreferrer">Единый федеральный реестр сведений о банкротстве</a>';
      
      const linkRegex7 = /ст\. 28 Закона «О банкротстве» №127-ФЗ/g;
      const link7 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_39331/1729ce292fc60c57f9e677f2ab0679ccb50772b2/" target="_blank" rel="noopener noreferrer">ст. 28 Закона «О банкротстве» №127-ФЗ</a>';
  
      const linkRegex8 = /ст\. 3\.1 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
      const link8 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/302aa518a2c33dfc84a296f1d109dfe94e35097c/" target="_blank" rel="noopener noreferrer">ст. 3.1 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';
   
      const linkRegex9 = /Распоряжения Правительства РФ № 1049-р/g;
      const link9 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_78597/" target="_blank" rel="noopener noreferrer">Распоряжения Правительства РФ № 1049-р</a>';
        
      const linkRegex10 = /официальном сайте ФССП/g;
      const link10 =
        '<a href="https://fssp.gov.ru/iss/ip" target="_blank" rel="noopener noreferrer">официальном сайте ФССП</a>';

      const linkRegex11 = /сайте ФНС/g;
      const link11 =
        '<a href="https://egrul.nalog.ru/index.html" target="_blank" rel="noopener noreferrer">сайте ФНС</a>';
          
      const linkRegex12 = /Картотеке арбитражных дел/g;
      const link12 =
        '<a href="https://kad.arbitr.ru/" target="_blank" rel="noopener noreferrer">Картотеке арбитражных дел</a>';
           
      const linkRegex13 = /ГАС «Правосудие»/g;
      const link13 =
        '<a href="https://bsr.sudrf.ru/bigs/portal.html" target="_blank" rel="noopener noreferrer">ГАС «Правосудие»</a>';
             
      const linkRegex14 = /Судебные и нормативные акты РФ/g;
      const link14 =
        '<a href="https://sudact.ru/" target="_blank" rel="noopener noreferrer">Судебные и нормативные акты РФ</a>';

      const linkRegex15 = /Картотека арбитражных дел/g;
      const link15 =
        '<a href="https://kad.arbitr.ru/" target="_blank" rel="noopener noreferrer">Картотека арбитражных дел</a>';
      
      const linkRegex16 = /Едином реестре застройщиков/g;
      const link16 =
        '<a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%B5%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80-%D0%B7%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%89%D0%B8%D0%BA%D0%BE%D0%B2" target="_blank" rel="noopener noreferrer">Едином реестре застройщиков</a>';
    
      const linkRegex17 = /Единый реестр застройщиков/g;
      const link17 =
        '<a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%B5%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80-%D0%B7%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%89%D0%B8%D0%BA%D0%BE%D0%B2" target="_blank" rel="noopener noreferrer">Единый реестр застройщиков</a>';
            
      const linkRegex18 = /ст\. 2 Закона «Об участии в долевом строительстве» №214-ФЗ/g;
      const link18 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/c5051782233acca771e9adb35b47d3fb82c9ff1c/" target="_blank" rel="noopener noreferrer">ст. 2 Закона «Об участии в долевом строительстве» №214-ФЗ</a>';
        
      const linkRegex19 = /Единый реестр проблемных объектов/g;
      const link19 =
        '<a href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%BD%D1%8B%D1%85-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2?objectIds=40822%2C48104%2C41069" target="_blank" rel="noopener noreferrer">Единый реестр проблемных объектов</a>';
        
      const linkRegex20 = /проблемными объектами/g;
      const link20 =
        '<a href="https://www.consultant.ru/document/cons_doc_LAW_51038/4ce23c06d221d774d5fa3c4b2a08fe168ef5fd7a/" target="_blank" rel="noopener noreferrer">проблемными объектами</a>';
        
      const linkRegex21 = /сайт Главного управления строительного надзора Московской области/g;
      const link21 =
        '<a href="https://gusn.mosreg.ru/deyatelnost/reestr-zablokirovannykh-zastroishikov" target="_blank" rel="noopener noreferrer">сайт Главного управления строительного надзора Московской области</a>';
        

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

      return replacedText;
    }

    let formattedShortText = "kek";
    let formattedLongText = "kek";
    let formattedShortTextWithLink = "lul";
    let formattedLongTextWithLink = "lul";

    if (typeof question3 !== "undefined") {
      formattedShortText = question3.text && replacedText(question3.text);
      formattedLongText =
        question3.addition && replacedText(question3.addition);
      formattedShortTextWithLink = question3.text && (
        <span dangerouslySetInnerHTML={{ __html: formattedShortText }}></span>
      );

      formattedLongTextWithLink = question3.addition && (
        <span dangerouslySetInnerHTML={{ __html: formattedLongText }}></span>
      );
    }

    if (!question3) {
      return (
        <div>
          <h1>Спасибо за ответы</h1>
          <Recomendations recomendations={recomendations} indexes={indexes} />
        </div>
      );
    }

    //console.log(formattedShortTextWithLink);
    if (question3.type === "main") {
      return (
        <div className="question">
          <div className="mainQuestion">
            <p>{formattedShortTextWithLink || question3.text}</p>
            {question3.addition && (
              <AdditionVisibility>
                <p>{formattedLongTextWithLink || question3.addition}</p>
              </AdditionVisibility>
            )}
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(100, 53, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question3.id, question3.type, " Нет")
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
          </div>
        </div>
      );
    } else if (question3.type === "medium" && question3.id !== 5) {
      return (
        <div className="question">
          <div className="mainQuestion">
          <p>{formattedShortTextWithLink || question3.text}</p>
            {question3.addition && (
              <AdditionVisibility>
                <p>{formattedLongTextWithLink || question3.addition}</p>
              </AdditionVisibility>
            )}
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(1, null, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    1,
                    onAnswer(mediumIndexDict3[question3.id][0]),
                    question3.id,
                    question3.type,
                    " Нет"
                  )
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    1,
                    onAnswer(mediumIndexDict3[question3.id][1]),
                    question3.id,
                    question3.type,
                    " Пропустить"
                  )
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(-1)}
                name={question3.id.toString()}
                value="Back"
              />
              Вернуться
            </label>
          </div>
        </div>
      );
    } else if (question3.type === "medium" && question3.id === 5) {
      return (
        <div className="question">
          <div className="mainQuestion">
          <p>{formattedShortTextWithLink || question3.text}</p>
            {question3.addition && (
              <AdditionVisibility>
                <p>{formattedLongTextWithLink || question3.addition}</p>
              </AdditionVisibility>
            )}
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(100, 58, question3.id, question3.type, " Да")
                }
                name={question3.id.toString()}
                value="Yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    100,
                    null,
                    question3.id,
                    question3.type,
                    " Нет"
                  )
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Нет
            </label>
            <label>
              <input
                type="radio"
                onClick={() =>
                  handleYesClick(
                    100,
                    onAnswer(mediumIndexDict3[question3.id][1]),
                    question3.id,
                    question3.type,
                    " Пропустить"
                  )
                }
                name={question3.id.toString()}
                value="Skip"
              />
              Пропустить
            </label>
            <label>
              <input
                type="radio"
                onClick={() => handleYesClick(-1)}
                name={question3.id.toString()}
                value="Back"
              />
              Вернуться
            </label>
          </div>
        </div>
      );
    }
  };
  return <div>{renderQuestion()}</div>;
}

export default Ques3;
