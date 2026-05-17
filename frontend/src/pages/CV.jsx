// frontend/src/pages/CV.jsx
import React from "react";
import LastUpdated from "../components/LastUpdated.jsx";
import pageMeta from "../data/pageMeta.json";

export default function CV() {
  React.useEffect(function () {
          document.title = "CV | Sanghoon Kim";
  }, []);

  var CV_URL = "/files/CV/Kim, Sang Hoon (CV).pdf"

  return (
    <div>
        <div style={{display:"flex", alignItems: "baseline", gap: 10 }}>
            <h1 style={{margin:0}}> CV </h1>
            <a href={CV_URL} target="_blank" rel="noreferrer"> [PDF] </a>
        </div>
        <LastUpdated date={pageMeta.cv.lastUpdated} />

    </div>
  );
}
