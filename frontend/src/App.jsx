import { useMemo } from "react"

const PROFILE = {
  name: "Kim, Sang Hoon"
  location: "Seoul, South Korea"
  email: "sanghoon6543@gmail.com"
  links: [
      { label: "GitHub", href: "https://github.com/sanghoon6543"},
  ],
};

function Section({ id, title, children }) {
    return(
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}


export default function App(){
  const year = useMemo(() => new  Date().getFullYear(), []);

    const nav = [
        { label: "About", href: "#about"},
        { label: "Projects", href: "#projects"}
    ];

    return (
        <div>
            <header>
                <strong>{PROFILE.name}</strong>
                <nav>
                    {nav.map((n) => (
                        <a key={n.href} href={n.href}>
                            {n.label}
                        </a>
                    ))}
                </nav>
            </header>

            <main>
                <h1>{PROFILE.name}</h1>
                <p>{PROFILE.location} <a href={'mailto:${PROFILE.email}'}>{PROFILE.email}</a>
                </p>
            {PROFILE.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                </a>
            ))}
            </main>
        </div>


};


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
