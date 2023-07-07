import React from "react";

export default function Recomendations({ Recomendations }) {
  console.log(Recomendations);
  function handleClick() {
    // let a = (document.getElementById("p").value = "longText");
    // document.getElementById("p").innerHTML = a;
  }
  return (
    <div className="recomendation">
      <h1>Рекомендации</h1>
      {Recomendations.map((el, i) => (
        <div key={i} className="shortRecomandation">
          {el.shortText}
          <button onClick={handleClick}>Дополнение</button>
        </div>
      ))}
    </div>
  );
}
