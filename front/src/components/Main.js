import Header from "./Header";
import Description from "./Description";
import Footer from "./Footer";
import Form from "./Form";
import Instruction from "./Instruction";
import React, { useState } from "react";
import PreviousQuestions from "./PreviousQuestions";
import "../App.css";
import { allQuestions } from "../data/questions";
import { allRecomendations } from "../data/recommendations";

function Main() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [obtainedRecommendations, setObtainedRecommendations] = useState([]);
  const [maxRisk, setMaxRisk] = useState([[-1, 0]]);

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

  const rec = obtainedRecommendations[obtainedRecommendations.length - 1];
  let curRisk = -1;

  if (typeof rec !== "undefined") {
    const answer = answers[answers.length - 1];

    const risk = allRecomendations.find((aq) => aq.id === rec).risk;
    const risk_no = allRecomendations.find((aq) => aq.id === rec).risk_no;
    const risk_skip = allRecomendations.find((aq) => aq.id === rec).risk_skip;

    if (typeof risk_no === "undefined") {
      curRisk = risk;
    } else {
      if (answer === 0) {
        curRisk = risk;
      }
      if (answer === 1) {
        curRisk = risk_no;
      }
      if (answer === 2) {
        curRisk = risk_skip;
      }
    }
    if (maxRisk[maxRisk.length - 1][0] < curRisk) {
      setMaxRisk((recs) => [...recs, [curRisk, rec]]);
    }
  }

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
    if (maxRisk[maxRisk.length - 1][1] === lastRec) {
      setMaxRisk((previousArr) => previousArr.slice(0, -1));
    }
  };

  const onQuestionRestart = () => {
    setAnsweredQuestions([]);
    setAnswers([]);
    setCurrentQuestion(1);
    setObtainedRecommendations([]);
    setMaxRisk(0);
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
        onQuestionRestart={onQuestionRestart}
        maxRisk={maxRisk}
      />
      <Footer />
    </div>
  );
}

export default Main;
