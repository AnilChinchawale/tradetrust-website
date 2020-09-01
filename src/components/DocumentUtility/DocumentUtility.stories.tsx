import React from "react";
import { DocumentUtility, DocumentUtilityUnStyled } from "./DocumentUtility";

export default {
  title: "Viewer/DocumentUtility",
  component: DocumentUtilityUnStyled,
  parameters: {
    componentSubtitle: "Utility functions relating to document, Display QR Code, Print, Download.",
  },
};

const documentWithoutQr = {
  data: {
    name: "bah bah black sheep",
  },
};

const documentWithQr = {
  data: {
    name: "bah bah black sheep",
    links: {
      self: {
        href: "https://openattestation.com",
      },
    },
  },
};

export const PrintAndDownload = () => {
  return <DocumentUtility document={documentWithoutQr as any} handleSharingToggle={() => {}} onPrint={() => {}} />;
};
export const QRPrintAndDownload = () => {
  return <DocumentUtility document={documentWithQr as any} handleSharingToggle={() => {}} onPrint={() => {}} />;
};
