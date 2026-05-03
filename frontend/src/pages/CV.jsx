// frontend/src/pages/CV.jsx
import React from "react";

export default function CV() {
  React.useEffect(function () {
          document.title = "CV | Sanghoon Kim";
  }, []);

  var CV_URL = "/files/CV/Kim, Sang Hoon (CV).pdf"
  var CV_UPDATED = "2026-05-03"

  return (
    <div>
        <div style={{display:"flex", alignItems: "baseline", gap: 10 }}>
            <h1 style={{margin:0}}> CV </h1>
            <a href={CV_URL} target="_blank" rel="noreferrer"> [PDF] </a>
            <span style={{ marginLeft: 8, opacity: 0.7, fontSize: 13 }}>Last updated: {CV_UPDATED}</span>
        </div>
    </div>
  );
}
