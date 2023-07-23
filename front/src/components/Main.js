import Header from "./Header";
import Description from "./Description";
import Footer from "./Footer";
import Form from "./Form";
import Instruction from "./Instruction";
import React, { useState } from "react";
import PreviousQuestions from "./PreviousQuestions";
import "../App.css";
import { allQuestions } from "../data/questions";

function Main() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [obtainedRecommendations, setObtainedRecommendations] = useState([]);

  const onAnswer = (questionId, answer, nextQuestionId) => {
    setAnsweredQuestions((prevQuestions) => [...prevQuestions, questionId]);
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestion(nextQuestionId);
    const question = allQuestions.find((aq) => aq.id === questionId);

    const nextRec = question.recomendations.length
      ? question.recomendations[+answer].length
        ? question.recomendations[+answer][0]
        : -1
      : -1;
    if (nextRec !== -1) {
      setObtainedRecommendations((recs) => [...recs, nextRec]);
    }
  };

  const onQuestionBack = () => {
    const id = answeredQuestions[answeredQuestions.length - 1];
    const lastRec = obtainedRecommendations[obtainedRecommendations.length - 1];
    const recs = allQuestions.find((aq) => aq.id === id).recomendations;
    for (const el in recs) {
      if (recs[el].includes(lastRec)) {
        setObtainedRecommendations((previousArr) => previousArr.slice(0, -1));
      }
    }
    setCurrentQuestion(id);
    setAnswers((previousArr) => previousArr.slice(0, -1));
    setAnsweredQuestions((previousArr) => previousArr.slice(0, -1));
  };

  return (
    <div className="wrapper">
      <Header />
      <Description />
      <Instruction />
      <PreviousQuestions questions={answeredQuestions} answers={answers} />
      <Form
        onAnswer={onAnswer}
        currentQuestion={currentQuestion}
        recommendations={obtainedRecommendations}
        onQuestionBack={onQuestionBack}
      />
      <Footer />
    </div>
  );
}

export default Main;
