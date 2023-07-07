import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import React, { useState } from "react";
import "./App.css";

const mainQuestionsMock = [
  {
    id: 1,
    text: "Опубликованы ли следующие документы, касающиеся объекта строительства в единой информационной системе жилищного строительства или на сайте застройщика?",
  },
  {
    id: 2,
    text: "На каком основании принадлежит застройщику земельный участок, на котором располагается будущий объект строительства?",
  },
];

const firstMediumQuestionsMock = [
  {
    id: 1,
    shortText:
      "Разрешения на ввод в эксплуатацию объектов капитального строительства, в которых принимали участие застройщик и (или) его основное общество или дочерние общества в течение 3-х лет, предшествующих опубликованию проектной декларации, с указанием места нахождения указанных объектов недвижимости, сроков ввода их в эксплуатацию",
  },
  {
    id: 2,
    shortText: "Разрешение на строительство",
  },
  {
    id: 3,
    shortText:
      "Проектная декларация, включающая в себя все внесенные в нее изменения",
  },
  {
    id: 4,
    shortText:
      "Проект договора участия в долевом строительстве или проекты таких договоров",
  },
  {
    id: 5,
    shortText: "Ежемесячные фотографии строящегося объекта",
  },
  {
    id: 6,
    shortText: "Градостроительный план земельного участка",
  },
  {
    id: 7,
    shortText: "Схема планировочной организации земельного участка",
  },
  {
    id: 8,
    shortText:
      "Документ, содержащий информацию о расчете размера собственных средств и нормативах финансовой устойчивости застройщика",
  },
  {
    id: 9,
    shortText:
      "Извещение о начале строительства, реконструкции объекта капитального строительства",
  },
  {
    id: 10,
    shortText:
      "Сведения об открытии или о закрытии расчетного счета застройщика с указанием номера такого счета, наименования уполномоченного банка и его идентификаторов",
  },
  {
    id: 11,
    shortText:
      "Аудиторские заключения по бухгалтерской (финансовой) отчетности",
  },
];

const firstMinorQuestionMock = [
  {
    id: 1,
    text: "Выдано ли оно уполномоченным органом субъекта, где расположен объект? (Напр., Мосгосстройнадзор для г. Москвы)",
  },
  {
    id: 2,
    text: "Имеется ли в нем дата, номер и подпись уполномоченного должностного лица, а также печати?",
  },
  {
    id: 3,
    text: "Имеется ли ссылка на то, что разрешение выдано в соответствии со ст. 51 Градостроительного Кодекса РФ?",
  },
  {
    id: 4,
    text: "Имеются ли в разрешении на строительство данные о застройщике, соответствующие данным, указанным в заключаемом договоре долевого строительства?",
  },
  {
    id: 5,
    text: "Соответствует ли адрес объекта, указанного в разрешении на строительство рекламируемому объекту?",
  },
  {
    id: 6,
    text: "Истекает ли срок действия разрешения на строительство до предполагаемой сдачи объекта?",
  },
  {
    id: 7,
    text: "Имеется ли пометка о продлении срока действия разрешения на строительство?",
  },
];

const secondMinorFirstQuestionsMock = [
  {
    id: 1,
    text: "Соответствует ли наименование собственника наименованию застройщика?",
  },
  {
    id: 2,
    text: "Соответствует ли адрес земельного участка адресу объекта строительства?",
  },
  {
    id: 3,
    text: "Отсутствуют ли судебные притязания или обременения в отношении данного земельного участка?",
  },
  {
    id: 4,
    text: "Указано ли в качестве одного из видов разрешенного использования данного земельного участка – строительство жилого дома?",
  },
];

const secondMinorSecondQuestionsMock = [
  {
    id: 1,
    text: "Срок аренды земельного участка оканчивается позже срока ввода объекта в эксплуатацию?",
  },
  {
    id: 2,
    text: "Имеется ли штамп о государственной регистрации договора аренды?",
  },
  {
    id: 3,
    text: "Указано ли, что целевое назначение данного земельного участка – строительство жилого дома?",
  },
  {
    id: 4,
    text: "Соответствует ли арендатор по договору аренды застройщику?",
  },
];

// {
//   id: 2,
//   shortText: '',
//   longText: '',
//   risk:
// },

const recomendationsMock = [
  {
    // short - краткая часть рекомендации, long - подробнее, risk - Расположение на Шкале Риска(0 - серый и тд)
    id: 1,
    shortText:
      "В случае, если застройщик участвовал в строительстве жилья в последние три года, то он обязан ее опубликовать, чтобы покупатель имел возможность оценить выполнение работ строительной компанией ранее, а также репутацию застройщика. Отсутствие подобной информации может указывать на недобросовестность застройщика.",
    longText:
      "В соответствии с п. 1 ч. 2 ст. 3.1 Федерального Закона «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости» застройщик обязан опубликовать на сайте единой информационной системы жилищного строительства в информационно-телекоммуникационной сети «Интернет» (https://наш.дом.рф/) разрешения на ввод в эксплуатацию объектов капитального строительства с указанием сроков, если он и аффилированные с ним общества принимали участие в течение последних 3-х лет перед опубликованием проектной декларации" +
      "Отсутствие такой информации влечет для застройщика административную ответственность в соответствии со ст. 14.28 «Нарушение требований законодательства об участии в долевом строительстве многоквартирных домов и (или) иных объектов недвижимости» Кодекса Российской Федерации об административных правонарушениях.",
    risk: 3,
  },
  {
    id: 2,
    shortText:
      "Информация о предыдущих объектах застройщика обязательна для опубликования и может быть полезна Вам при оценивании добросовестности и репутации застройщика.",
    longText: null,
    risk: 0,
  },
  {
    id: 3,
    shortText:
      "Разрешение на строительство является обязательными документом, который дает право застройщику осуществлять строительство, а также привлекать денежные средства по договору долевого участия и заключать их.",
    longText:
      "В соответствии с ч. 1 ст. 3 Федерального Закона «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости» застройщик имеет привлекать денежные средства участников долевого строительства для строительства (создания) многоквартирного дома и (или) иных объектов недвижимости только после получения соответствующего разрешение на строительство." +
      "В соответствии с п. 1 ч. 2 ст. 3.1 Федерального Закона «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости» застройщик обязан опубликовать на сайте единой информационной системы жилищного строительства в информационно-телекоммуникационной сети «Интернет» (https://наш.дом.рф/) разрешения на строительство. " +
      "Отсутствие такой информации влечет для застройщика административную ответственность в соответствии со ст. 14.28 «Нарушение требований законодательства об участии в долевом строительстве многоквартирных домов и (или) иных объектов недвижимости» Кодекса Российской Федерации об административных правонарушениях. " +
      "При отсутствии данного документа построенный объект строительства будет считаться самовольной постройкой в соответствии со ст. 222 Гражданского Кодекса Российской Федерации. В случае, если застройщик планирует получить разрешение на строительство впоследствии стоит учитывать, что оно может быть не выдано в целом. ",
    risk: 9,
  },
  {
    id: 4,
    shortText:
      "Разрешение на строительство является ключевым документом при строительстве. Рекомендуем ознакомиться с ним и удостовериться в его существовании и действительности.",
    longText: null,
    risk: 4,
  },
  {
    id: 5,
    shortText:
      "Разрешение на строительство должно соответствовать определенным требованием. Отсутствие хотя бы одного из них формирует риск того, что оно документ окажется недействительным. ",
    longText: "..",
    risk: 8,
  },
  {
    id: 6,
    shortText:
      "В проектной декларации можно узнать основную информацию о застройщике и объекте строительства. Публикация проектной декларации является обязательной, без чего застройщик не имеет права привлекать денежные средства по договору долевого участия и заключать их.",
    longText:
      "В соответствии с ч. 1 ст. 3 Федерального Закона «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости» застройщик имеет привлекать денежные средства участников долевого строительства для строительства (создания) многоквартирного дома и (или) иных объектов недвижимости только после опубликования проектной декларации." +
      "В соответствии с п. 1 ч. 2 ст. 3.1 Федерального Закона «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости» застройщик обязан опубликовать на сайте единой информационной системы жилищного строительства в информационно-телекоммуникационной сети «Интернет» (https://наш.дом.рф/) проектной декларации. " +
      "Отсутствие такой информации влечет для застройщика административную ответственность в соответствии со ст. 14.28 «Нарушение требований законодательства об участии в долевом строительстве многоквартирных домов и (или) иных объектов недвижимости» Кодекса Российской Федерации об административных правонарушениях.",
    risk: 7,
  },
  {
    id: 7,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 8,
    shortText: "",
    longText: "",
    risk: 5,
  },
  {
    id: 9,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 10,
    shortText: "",
    longText: "",
    risk: 4,
  },
  {
    id: 11,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 12,
    shortText: "",
    longText: "",
    risk: 4,
  },
  {
    id: 13,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 14,
    shortText: "",
    longText: "",
    risk: 4,
  },
  {
    id: 15,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 16,
    shortText: "",
    longText: "",
    risk: 6,
  },
  {
    id: 17,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 18,
    shortText: "",
    longText: "",
    risk: 3,
  },
  {
    id: 19,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 20,
    shortText: "",
    longText: "",
    risk: 4,
  },
  {
    id: 21,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 22,
    shortText: "",
    longText: "",
    risk: 6,
  },
  {
    id: 23,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 24,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 25,
    shortText: "",
    longText: "",
    risk: 4,
  },
  {
    id: 26,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 27,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 28,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 29,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 30,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 31,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 32,
    shortText: "",
    longText: "",
    risk: 0,
  },
  {
    id: 33,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 34,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 35,
    shortText: "",
    longText: "",
    risk: 7,
  },
  {
    id: 36,
    shortText: "",
    longText: "",
    risk: 5,
  },
  {
    id: 37,
    shortText: "",
    longText: "",
    risk: 4,
  },
];

function App() {
  const [mainQuestions, setQuestions] = useState(mainQuestionsMock);
  return (
    <div className="wrapper">
      <Header />
      <Quiz />
      <Form questions={mainQuestions} />
      <Footer />
    </div>
  );
}

export default App;
