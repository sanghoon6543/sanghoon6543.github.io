import React from "react";
import { NavLink } from "react-router-dom";
import author from "../data/author.json";

function ProfileBlock(props){
  var showInlineCopy = props && props.showInlineCopy;
  var inlineCopyText = props && props.inlineCopyText;

  return (
    <div className="ap-profile">
      <img className="ap-avatar" src={author.avatarUrl} alt="profile" />
      <div className="ap-name">{author.name}</div>
      <div className="ap-bio">{author.bio}</div>

      <div className="ap-links">
        <div className="ap-links-left">
            {author.links.map(function (l) {
              return (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              );
            })}
          </div>
          {showInlineCopy ? ( <div className="ap-footer-copy ap-footer-copy--inline">{inlineCopyText}</div>) : null}
        </div>
    </div>
  );
}

export default function AcademicLayout(props) {
  var nav = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/archive", label: "Archive" },
    { to: "/cv", label: "CV" },
    { to: "/gallery", label: "Gallery" },
    { to: "/hobby", label: "Hobby" },
  ];

  return (
    <div className="ap-shell">
      <aside className="ap-sidebar">
        <div className="ap-profile--desktop">
            <ProfileBlock />
        </div>

        <div className="ap-navwrap">
            <nav className="ap-nav">
              {nav.map(function (n) {
                return (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className="ap-navlink"
                  >
                    {n.label}
                  </NavLink>
                );
              })}
            </nav>
        </div>
      </aside>

      <main className="ap-main">
        {props.children}
        <footer className="ap-footer">
          <div className="ap-profile--footer">
              <ProfileBlock showInlineCopy={true} inlineCopyText={"© " + new Date().getFullYear() + " " + author.name}/>
          </div>
          <div className="ap-footer-copy--desktop">
              © {new Date().getFullYear()} {author.name}
          </div>
        </footer>
      </main>
    </div>
  );
}