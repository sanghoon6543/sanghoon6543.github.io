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
         marginBottom: 8
     }}
    >
     {props.children}
    </span>
  );
}

function renderBoldText(text, keyPrefix) {
    var parts = String(text || "").split("**");
    var out = [];
    for (var i = 0; i < parts.length; i++) {
        var key = keyPrefix + "-b-" + i;
        if (i % 2 === 1) out.push(<strong key={key}>{parts[i]}</strong>);
        else out.push(<span key={key}>{parts[i]}</span>);
        }
    return out;
}

export default function Projects() {
  React.useEffect(function () {
          document.title = "Projects | Sanghoon Kim";
  }, []);

  return (
    <div>
        <div style={{display:"flex", alignItems: "baseline", gap: 10 }}>
          <h1 style={{margin:0}}> Projects </h1>
          <a href="/files/projects/Kim, Sang Hoon (Research Experience Summary).pdf" target="_blank" rel="noreferrer">
           [PDF] </a>
        </div>
        <div className="proj-list">
          {projects.map(function (p) {
              return (
                  <div key={p.id} className="item">
                      <div className="proj-header">
                         <h3 className="title">{p.title}</h3>
                      </div>

                      {(p.summary || []).map(function (line, idx) {
                          return <p key={p.id + "-s-" + idx} className="paragraph">{renderBoldText(line, p.id + "-s-" + idx)}</p>;
                      })}

                      <div className="proj-tags">
                          {(p.tags || []).map(function (t) {
                              return <Pill key={t}>{t}</Pill>;
                          })}
                      </div>
                      <div className="links">
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
