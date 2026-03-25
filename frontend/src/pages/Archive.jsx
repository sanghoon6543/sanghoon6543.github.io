// frontend/src/pages/CV.jsx
import React from "react";

export default function CV() {
  React.useEffect(function () {
          document.title = "Archive | Sanghoon Kim";
  }, []);

  return (
    <div>
      <h1>Archive</h1>
      <p>Archive Contents</p>
    </div>
  );
}