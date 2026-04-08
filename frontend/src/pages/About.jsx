import React from "react";
import sections from "../data/about.json"

function Figure(props){
    var img = props.img;
    return (
        <figure className = "figure">
            <img className = "img" src={img.src} alt={img.alt || ""} />
            {img.caption ? <figcaption className="img-caption">{img.caption}</figcaption>:null}
        </figure>
    );
}

export default function About() {
  React.useEffect(function () {
          document.title = "Sanghoon Kim | Personal Web Page";
  }, []);

  return (
    <div>
{/*       <h1>About</h1> */}
        <div className="about-list">
            {sections.map(function (s) {
                return (
                    <section key={s.id} className="item" id={s.id}>
                        <h2 className="title">{s.title}</h2>
                         {(s.paragraph || []).map(function (text, idx) {
                          return (<p key={s.id + "-p-" + idx} className="paragraph">{text}</p>);
                         })}
                         {(s.images || []).map(function (img, idx) {
                          return <Figure key={s.id + "-img-" + idx} img={img} />;
                         })}
                     </section>
                );
            })}
        </div>
    </div>
  )
}
//        <figure style = {{ textAlign: "center", margin: "16px 0"}}>
//            <img
//
//            "style": {{ }} />,
//
//           <figcaption style = {{ }}>
//               Image from wikipedia
//           </figcaption>
//        </figure>
//
//       <p>  </p>
//
//        <figure style = {{ textAlign: "center", margin: "16px 0"}}>
//           <img
//               src = "/images/EM-Wave.gif"
//               alt = "ElectroMagnetic Wave"
//               style = {{ width: "min(360px, 100%)", height: "auto", display: "block", margin: "12px auto", borderRadius: 12}} />
//             <figcaption style = {{ marginTop: 8, fontSize: 10, opacity: 0.75}}>
//               Image from wikipedia
//           </figcaption>
//        </figure>
//
//       <p>  </p>
//     </div>
//   );
// }