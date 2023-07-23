import React from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const PDFtest = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button className="showQuesBtn">Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFtest;
