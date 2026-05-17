// frontend/src/pages/Archive.jsx
import React from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";
import archive from "../data/archive.json";
import LastUpdated from "../components/LastUpdated.jsx";
import pageMeta from "../data/pageMeta.json";


var archiveTabs = [
    { id: "journals", label: "Journals" },
    { id: "conferences", label: "Conferences" },
    { id: "patents", label: "Patents" },
    { id: "funding", label: "Funded Projects"}
];

function isValidArchiveId(archiveId) {
    for (var i = 0; i < archiveTabs.length; i++) {
        if (archiveTabs[i].id === archiveId) { return true; }
    }
    return false;
}

function sortByYearDesc(items) {
    var copy = (items || []).slice();
    copy.sort(function (a, b) {
        return (b.year || 0) - (a.year || 0);
    });
    return copy;
}

function LinksRow(props) {
    var links = props.links || [];
    if (!links || links.length === 0) return null;

    return (
        <div className = "links">
            {links.map(function (l) {
                return (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                );
            })}
        </div>
    );
}

function JournalItem(props) {
    var it = props.it;
    return (
        <div className="item">
            <div className="top">
                <h3 className="title">{it.title}</h3>
                <div className="period">{it.year}</div>
            </div>
            <div className="paragraph">{it.authors}</div>
            <div className="paragraph">
                    {it.venue} {it.status ? " · " + it.status : ""}
            </div>
            <LinksRow links={it.links} />
        </div>
    );
}

function ConfItem(props) {
    var it = props.it;
    return (
        <div className="item">
            <div className="top">
                <h3 className="title">{it.title}</h3>
                <div className="period">{it.year}</div>
            </div>
            <div className="paragraph">{it.authors}</div>
            <div className="paragraph">
                {it.venue} {it.type ? " · " + it.type : ""}
            </div>
            <LinksRow links={it.links} />
        </div>
    );
}

function PatentItem(props) {
    var it = props.it;
    return (
        <div className="item">
            <div className="top">
                <h3 className="title">{it.title}</h3>
                <div className="period">{it.year}</div>
            </div>
            <div className="paragraph">{it.authors}</div>
            <div className="paragraph">
                {it.status ? it.status : ""} {it.number ? " · " + it.number : ""}
            </div>
            <LinksRow links={it.links} />
        </div>
  );
}

function FundingItem(props) {
    var it = props.it;
    return (
        <div className="item">
            <div className="top">
                <h3 className="title">{it.title}</h3>
                <div className="period">{it.period}</div>
            </div>
            <div className="paragraph">
                {it.status ? it.status : ""} {it.number ? " · " + it.number : ""}
            </div>
        </div>
  );
}

function ArchiveItem(props) {
    var archiveId = props.archiveId;
    var item = props.item;

    if (archiveId === "journals") { return <JournalItem it={item} />; }
    if (archiveId === "conferences") { return <ConfItem it={item} />; }
    if (archiveId === "patents") { return <PatentItem it={item} />; }
    if (archiveId === "funding") {return <FundingItem it={item} />; }
    return null;
}



export default function Archive() {
    React.useEffect(function () {
        document.title = "Archive | Sanghoon Kim";
    }, []);

    var params = useParams();
    var archiveId = params.archiveId || "journals";
    if (!isValidArchiveId(archiveId)) { return <Navigate to="/archive/journals" replace />; }

    var data = {
        journals: sortByYearDesc(archive.journals),
        conferences: sortByYearDesc(archive.conferences),
        patents: sortByYearDesc(archive.patents),
        funding: sortByYearDesc(archive.funding)
    };
    var currentItems = data[archiveId] || [];


  return (
    <div>
      <h1 style={{ margin: 0 }}>Archive</h1>
      <LastUpdated date={pageMeta.archive.lastUpdated} />

      <div className="tabs">
        {archiveTabs.map(function (c) {
          return (<NavLink key={c.id} to={"/archive/" + c.id} className="tab">{c.label} </NavLink>);
        })}
      </div>

      <div className="arc-list">
          {currentItems.map(function (item) {
              return ( <ArchiveItem key={item.id} archiveId={archiveId} item={item} /> );
          })}
      </div>
    </div>
  );
}
