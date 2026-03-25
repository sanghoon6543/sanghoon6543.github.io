// frontend/src/pages/CV.jsx
import React from "react";

export default function CV() {
  React.useEffect(function () {
          document.title = "Gallery | Sanghoon Kim";
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <p>Gallery Contents</p>
    </div>
  );
}