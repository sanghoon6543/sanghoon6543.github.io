import React from "react";
import { Routes, Route } from "react-router-dom";
import AcademicLayout from "./layouts/AcademicLayout.jsx";

import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CV from "./pages/CV.jsx";

export default function App() {
  return (
    <AcademicLayout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </AcademicLayout>
  );
}

// import { useMemo } from "react"
//
// const PROFILE = {
//   name: "Kim, Sang Hoon",
//   location: "Seoul, South Korea",
//   email: "sanghoon6543@gmail.com",
//   links: [
//       { label: "GitHub", href: "https://github.com/sanghoon6543"},
//   ],
// };
//
// const EXPERIENCE = [
//     {
//         company: "aa",
//         role: "Researcher",
//         period: "2021 - Present",
//         highlights: [
//             "Image Sensors Beyond the Visible",
//         ],
//     },
// ];
//
// const PROJECTS = [
//     {
//         name: 'aaa',
//         period: "2021-2023",
//         tags: ['Optics'],
//         description: "will be updated",
//         links: "will be updated",
//     },
// ];
//
// function Section({ id, title, children }) {
//     return(
//         <section id={id}>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }
//
// function Pill({ children }) {
//     return (
//         <span
//             style={{
//                 display: "inline-block",
//                 padding: "6px 10px",
//                 borderRadius: 999,
//                 border: "1px solid #e5e7eb",
//                 fontSize: 12,
//                 marginRight: 8,
//                 marginBottom: 8,
//             }}
//         >
//             {children}
//         </span>
//     );
// }
//
// export default function App(){
//     const year = useMemo(function () {
//       return new Date().getFullYear();
//     }, []);
//
//     const nav = [
//         { label: "About", href: "#about"},
//         { label: "Projects", href: "#projects"},
//         { label: "Experience", href: "#experience"},
//     ];
//
//     return (
//         <div>
//             style
//             <header>
//                 <strong>{PROFILE.name}</strong>
//                 <nav>
//                     {nav.map(function (n) {
//                         return (
//                             <a key={n.href} href={n.href}>
//                                 {n.label}
//                             </a>
//                         );
//                     })}
//                 </nav>
//             </header>
//
//             <main>
//                 <h1>{PROFILE.name}</h1>
//                 <p>{PROFILE.location} <a href={'mailto:${PROFILE.email}'}>{PROFILE.email}</a>
//                 </p>
//             {PROFILE.links.map(function (l) {
//                 return (
//                     <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
//                         {l.label}
//                     </a>
//                 );
//             })}
//
//             </main>
//         </div>
//     );
// };
//
//
// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// //
// // function App() {
// //   const [count, setCount] = useState(0)
// //
// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }
// //
// // export default App
