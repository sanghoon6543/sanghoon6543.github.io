// frontend/src/pages/Archive.jsx
import React from "react";
import archive from "../data/archive.json"

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
            <div className="arc-top">
                <div className="arc-title">{it.title}</div>
                <div className="arc-year">{it.year}</div>
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
            <div className="arc-top">
                <div className="arc-title">{it.title}</div>
                <div className="arc-year">{it.year}</div>
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
            <div className="arc-top">
                <div className="arc-title">{it.title}</div>
                <div className="arc-year">{it.year}</div>
            </div>
            <div className="paragraph">{it.inventors}</div>
            <div className="paragraph">
                {it.status ? it.status : ""} {it.number ? " · " + it.number : ""}
            </div>
            <LinksRow links={it.links} />
        </div>
  );
}

export default function Archive() {
    React.useEffect(function () {
        document.title = "Archive | Sanghoon Kim";
    }, []);

    var data = {
        journals: sortByYearDesc(archive.journals),
        conferences: sortByYearDesc(archive.conferences),
        patents: sortByYearDesc(archive.patents),
    };

    var [tab, setTab] = React.useState("journals");

  return (
    <div>
      <h1 style={{ margin: 0 }}>Archive</h1>

      <div className="tabs">
        <button className={"tab" + (tab === "journals" ? " active" : "")} onClick={function () { setTab("journals");}}>
          Journals
        </button>

        <button className={"tab" + (tab === "conferences" ? " active" : "")} onClick={function () { setTab("conferences");}}>
          Conference
        </button>

        <button className={"tab" + (tab === "patents" ? " active" : "")} onClick={function () { setTab("patents"); }}>
          Patents
        </button>
      </div>

      <div className="arc-list">
        {tab === "journals" ? data.journals.map(function (it) {
              return <JournalItem key={it.id} it={it} />;
            }) : null
        }

        {tab === "conferences" ? data.conferences.map(function (it) {
              return <ConfItem key={it.id} it={it} />;
            }) : null
        }

        {tab === "patents" ? data.patents.map(function (it) {
              return <PatentItem key={it.id} it={it} />;
            }) : null
        }
      </div>
    </div>
  );
}
