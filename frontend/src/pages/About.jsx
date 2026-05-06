import React from "react";
import sections from "../data/about.json"

function Figure(props) {
  var img = props.img;
  return (
    <figure className="figure">
      <img className="img" src={img.src} alt={img.alt || ""} />
      {img.caption ? <figcaption className="caption">{img.caption}</figcaption> : null}
    </figure>
  );
}

function Block(props){
    var b = props.block;
    if (b.type === "p") {
        return <p className="paragraph">{b.text}</p>;
    }
    if (b.type === "img") {
        return <Figure img={{ src: b.src, alt: b.alt, caption: b.caption }} />;
    }
    return null;
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
                         {(s.blocks || []).map(function (b, idx) {
                          return <Block key={s.id + "-b-" + idx} block={b} />;
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