import React, { useState } from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";
import { allRecomendations } from "../data/recommendations";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Recomendations({ recommendations }) {
  return (
    <div className="recomendation">
      <h1>
        {recommendations.length > 0 ? "Рекомендации" : "Нет рекомендаций"}
      </h1>
      {recommendations.length > 0 && (
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button className="showQuesBtn">Loading Document...</button>
            ) : (
              <button>Скачать рекомендации</button>
            )
          }
        </PDFDownloadLink>
      )}
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
