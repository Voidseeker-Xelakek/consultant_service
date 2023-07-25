import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { allRecomendations } from "../data/recommendations";

import MyCustomFont from "../fonts/Mulish-Regular.ttf";

Font.register({
  family: "Mulish-Regular",
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
    fontFamily: "Mulish-Regular",
  },
  text: {
    margin: 12,
    fontSize: 15,
    textAlign: "justify",
    fontFamily: "Mulish-Regular",
  },
  doc: {
    border: 2,
  },
});

const PDFFile = ({ recommendations }) => {
  return (
    <Document style={styles.doc}>
      <Page key={1}>
        {recommendations.map((r, i) => {
          const recommendation = allRecomendations.find((ar) => ar.id === r);
          return (
            <View>
              <Text style={styles.text} className="shortRecomandation">
                {recommendation.shortText}
              </Text>
              <Text style={styles.text} className="shortRecomandation">
                {recommendation.longText}
              </Text>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default PDFFile;
