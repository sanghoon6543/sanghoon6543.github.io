import React from "react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
       <figure style = {{ textAlign: "center", margin: "16px 0"}}>
           <img
              src = "/images/Electromagnetic Spectrum.jpg"
              alt = "ElectroMagnetic Spectrum"
              style = {{ width: "min(360px, 100%)", height: "auto", display: "block", margin: "12px auto", borderRadius: 12}} />
          <figcaption style = {{ marginTop: 8, fontSize: 10, opacity: 0.75}}>
              Image from wikipedia
          </figcaption>
       </figure>

      <p> My research interest is obtaining information from the electromagnetic-matter interaction.
          I consistently explored nanomaterials interacting with electromagnetic waves beyond the visible,
          including physics calculation, optoelectronic device modelling, device evaluation, and
          constructing optical instruments to characterize the device. </p>

       <figure style = {{ textAlign: "center", margin: "16px 0"}}>
          <img
              src = "/images/EM-Wave.gif"
              alt = "ElectroMagnetic Wave"
              style = {{ width: "min(360px, 100%)", height: "auto", display: "block", margin: "12px auto", borderRadius: 12}} />
            <figcaption style = {{ marginTop: 8, fontSize: 10, opacity: 0.75}}>
              Image from wikipedia
          </figcaption>
       </figure>

      <p> Humans perceive the intensity of wavelength from 400nm to 700nm as visible image,
          and this visual information significantly influences recognition both on biological and intelligent systems.
          Based on such stimuli, they react and predict future states. Although the visible provides abundant data,
          electromagnetic waves possess many other parameters, and these would be valuable as X-Ray did. Based on the
          understanding physical phenomena of electromagnetics, I aspire to pave and interpret novel forms of beneficial
          information beyond our eyes. </p>
    </div>
  );
}