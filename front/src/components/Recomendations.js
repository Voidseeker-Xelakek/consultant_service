import React, { useState } from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";
import { allRecomendations } from "../data/recommendations";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { riskAddition } from "../data/recommendations";

export default function Recomendations({ recommendations, maxRisk }) {
  const risk_btn = ["", "", "", ""];
  if (maxRisk === 0) {
    risk_btn[0] = "!!!";
  } else if (maxRisk === 1) {
    risk_btn[1] = "!!!";
  } else if (maxRisk === 2) {
    risk_btn[2] = "!!!";
  } else {
    risk_btn[3] = "!!!";
  }
  console.log(risk_btn[0]);
  return (
    <div className="recomendation">
      <h1>
        {recommendations.length > 0 ? "Рекомендации" : "Нет рекомендаций"}
      </h1>
      {recommendations.length > 0 && (
        <div className="risk-buttons">
          <button className="gray-button">{risk_btn[0]}</button>
          <button className="green-button ">{risk_btn[1]}</button>
          <button className="yellow-button">{risk_btn[2]}</button>
          <button className="red-button ">{risk_btn[3]}</button>
        </div>
      )}
      {recommendations.length > 0 && (
        <AdditionVisibility component={"riskAddition"}>
          <Addition addition={riskAddition} />
        </AdditionVisibility>
      )}
      {recommendations.length > 0 && (
        <PDFDownloadLink
          document={<PDFFile recommendations={recommendations} />}
          fileName="Рекомендации.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button className="downloadBtn">Loading Document...</button>
            ) : (
              <button className="downloadBtn">Скачать рекомендации</button>
            )
          }
        </PDFDownloadLink>
      )}
      {recommendations.map((r, i) => {
        const recommendation = allRecomendations.find((ar) => ar.id === r);
        return (
          <div key={i} className="shortRecomandation">
            <div className="recommendation-item">
              <span className="recommendation-text">
                <ReactMarkdown
                  components={{
                    a: Anchor,
                  }}
                >
                  {recommendation.shortText}
                </ReactMarkdown>
              </span>
              {recommendation.longText && (
                <AdditionVisibility>
                  <Addition addition={recommendation.longText} />
                </AdditionVisibility>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
