import React from "react";
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { allRecomendations } from "../data/recommendations";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { Anchor } from "./Anchor";

import MyCustomFont from "../fonts/Mulish-Regular.ttf";

Font.register({
  family: "AntonFamily",
  src: MyCustomFont,
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "AntonFamily",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "AntonFamily",
  },
});

const PDFFile = ({ recommendations }) => {
  return (
    <Document>
      <Page key={1}>
        {recommendations.map((r, i) => {
          const recommendation = allRecomendations.find((ar) => ar.id === r);
          return (
            <Text style={styles.text} className="shortRecomandation">
              {recommendation.shortText}
            </Text>
          );
        })}
      </Page>
    </Document>
  );
};

export default PDFFile;
