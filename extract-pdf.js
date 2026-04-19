const fs = require("fs");
const PdfParser = require("pdf2json");

const pdfPath =
  "c:/Users/matte/Projets/Portfolio/vite-project/SLAM_ActivitésCompétences.pdf";

const pdfParser = new PdfParser(null, 1);

pdfParser.on("pdfParser_dataReady", () => {
  const text = pdfParser.getRawTextContent();
  console.log(text);
});

pdfParser.on("pdfParser_dataError", (error) => {
  console.error("Error parsing PDF:", error);
});

pdfParser.loadPDF(pdfPath);
