import React from "react";

export function Question({ Question }) {
  return (
    <div>
      <p>{Question.text}</p>
      <input></input>
    </div>
  );
}

export default Question;
