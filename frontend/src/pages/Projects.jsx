// frontend/src/pages/Projects.jsx
import React from "react";
import projects from "../data/projects.json"

function Pill(props){
  return (
    <span
     style={{
         display: "inline-block",
         padding: "4px 10px",
         borderRadius: 999,
         border: "1px solid #e5e7eb",
         fontSize: 12,
         marginRight: 8,
         marginBbottom: 8
     }}
    >
     {props.children}
    </span>
  );
}

export default function Projects() {
  React.useEffect(function () {
          document.title = "Projects | Sanghoon Kim";
  }, []);

  return (
    <div>
      <h1> Projects </h1>
      <div className="proj-list">
          {projects.map(function (p) {
              return (
                  <div key={p.id} className="proj-item">
                      <div className="proj-header">
                         <h3 className="proj-title">{p.title}</h3>
                      </div>

                      {(p.summary || []).map(function (line, idx) {
                          return <p key={p.id + "-s-" + idx} className="proj-summary">{line}</p>;
                      })}

                      <div className="proj-tags">
                          {(p.tags || []).map(function (t) {
                              return <Pill key={t}>{t}</Pill>;
                          })}
                      </div>
                      <div className="proj-links">
                          {(p.links || []).map(function (l){
                              return (<a key={l.href} href={l.href} target="_blank" rel="noreferrer"> {l.label} </a>);
                          })}
                      </div>
                  </div>
              );
          })}
      </div>
    </div>
  );
}



{/*       <p> <a href="/files/Kim, Sang Hoon (Research Experience Summary).pdf" target="_blank" rel="noreferrer"> */}
{/*            Overview (PDF) </a> </p> */}
{/*       <p> [6] SWIR Bio Imaging System (2026 - Present) </p> */}
{/*       <p> [5] SWIR Image Sensors based on Quantum Dot (2024 - Present) </p> */}
{/*       <p> [4] Direct X-Ray Detectors based on Quantum Dot (2023 - 2025) </p> */}
{/*       <p> [3] Metasurface for High Spatial Resolution indirect X-Ray Detectors (2023 - Present) </p> */}
{/*       <p> [2] Surface Enhanced Raman Scattering for Point of Care Testing (2021 - 2023) </p> */}
{/*       <p> [1] Graphene based Optoelectronic Device (2016 - 2018) </p> */}
