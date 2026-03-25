// frontend/src/pages/CV.jsx
import React from "react";

export default function CV() {
  React.useEffect(function () {
          document.title = "Hobby | Sanghoon Kim";
  }, []);

  return (
    <div>
      <h1>Hobby</h1>
      <p>Hobby Contents</p>
    </div>
  );
}