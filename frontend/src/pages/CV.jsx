// frontend/src/pages/CV.jsx
import React from "react";

export default function CV() {
  React.useEffect(function () {
          document.title = "CV | Sanghoon Kim";
  }, []);

  return (
    <div>
      <h1>CV</h1>
      <p>CV Contents</p>
    </div>
  );
}