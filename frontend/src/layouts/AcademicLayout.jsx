import React from "react";
import { NavLink } from "react-router-dom";
import author from "../data/author.json";

export default function AcademicLayout(props) {
  var nav = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/cv", label: "CV" },
  ];

  return (
    <div className="ap-shell">
      <aside className="ap-sidebar">
        <div className="ap-profile">
          <img className="ap-avatar" src={author.avatarUrl} alt="profile" />
          <div className="ap-name">{author.name}</div>
          <div className="ap-bio">{author.bio}</div>

          <div className="ap-links">
            {author.links.map(function (l) {
              return (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>

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
      </aside>

      <main className="ap-main">
        {props.children}
        <footer className="ap-footer">
          © {new Date().getFullYear()} {author.name}
        </footer>
      </main>
    </div>
  );
}