import React, { useState } from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";
import { allRecomendations } from "../data/recommendations";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../index.css"

export default function Recomendations({ recommendations }) {
  const renderRiskLevel = () => {
    if (recommendations.length > 0) {
      return <h2>Средняя степень риска</h2>;
    }
    return null;
  };
  return (
  <div className="recomendation">
      {renderRiskLevel()} 
      {recommendations.length > 0 && (
        <>
        <div className="risk-buttons">
          <button className="gray-button risk-button" />
          <button className="green-button risk-button" /> 
          <button className="yellow-button risk-button" />
          <button className="red-button risk-button" />
        </div>
          <PDFDownloadLink document={<PDFFile />} filename="FORM">
            {({ loading }) =>
              loading ? (
                <button className="showQuesBtn">Loading Document...</button>
              ) : (
                <button>Скачать рекомендации</button>
              )
            }
          </PDFDownloadLink>
        </>
      )}
      <h1>
        {recommendations.length > 0 ? "Рекомендации" : "Нет рекомендаций"}
      </h1>
      {recommendations.map((r, i) => {
        const recommendation = allRecomendations.find((ar) => ar.id === r);
        return (
          <div key={i} className="shortRecomandation">
            <div className="recommendation-item">
              <span className="recommendation-id">{i + 1}</span>
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
