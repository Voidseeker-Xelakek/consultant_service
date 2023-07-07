import React from "react";

export function Question({ mainQuestion }) {
  return (
    <div>
      <p>{mainQuestion.text}</p>
      <input></input>
    </div>
  );
}

export default Question;
