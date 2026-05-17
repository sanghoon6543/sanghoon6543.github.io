// frontend/src/pages/Projects.jsx
import React from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";
import projectData from "../data/projects.json";
import LastUpdated from "../components/LastUpdated.jsx";
import pageMeta from "../data/pageMeta.json";


function getCategoryById(categoryId) {
    var categories = projectData.categories || [];

    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === categoryId) { return categories[i]; }
    }
    return null;
}

function getProjectById(projectId) {
    var projectList = projectData.projects || [];
    for (var i = 0; i < projectList.length; i++) {
        if (projectList[i].id === projectId) { return projectList[i]; }
    }
    return null;
}

function Pill(props){
  return <span className="pill">{props.children}</span>;
}

function ProjectItem(props) {
    var p = props.project;
    var displayNumber = props.displayNumber;

    return (
        <div className = "item">
            <div className = "top">
                <h3 className = "title">
                    <span className="number">[{displayNumber}] </span> {p.title}
                </h3>
                {p.period ? <span className="period"> {p.period}</span> : null}
            </div>

            {(p.summary || []).map(function (line, idx) {
                  return <p key={p.id + "-s-" + idx} className="paragraph">{renderBoldText(line, p.id + "-s-" + idx)}</p>;
            })}

            <div className="tags">
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
  var params = useParams();
  var categoryId = params.categoryId || "featured";
  var category = getCategoryById(categoryId);
  if (!category) { return <Navigate to="/projects/featured" replace />; }

  return (
    <div>
        <div style={{display:"flex", alignItems: "baseline", gap: 10 }}>
          <h1 style={{margin:0}}> Projects </h1>
          <a href="/files/projects/Kim, Sang Hoon (Research Experience Summary).pdf" target="_blank" rel="noreferrer">
           [Overview PDF] </a>
        </div>
        <LastUpdated date={pageMeta.projects.lastUpdated} />

        <div className="tabs">
          {(projectData.categories || []).map(function (c) {
              return (
                  <NavLink key={c.id} to={"/projects/" + c.id} className="tab">{c.label}</NavLink>);
          })}
        </div>

        <h2 className = "title">{category.label}</h2>

        <div className="proj-list">
            {(category.projectIds || []).map(function (projectId, idx) {
                var project = getProjectById(projectId);
                var total = category.projectIds.length;
                var displayNumber = total - idx;

                if (!project) {
                    return null;
                }

                return <ProjectItem key={project.id} project={project} displayNumber={displayNumber}/>;
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
