import fotoCv from "../assets/Fotomia.jpg";

export function AboutMe() {
  return (
    <div className="about-me">
      <p className="presentazione">
        Ciao! <br />
        Mi chiamo Domenico Provenzano, <br />
        sono un Jr. Full Stack Web Developer!
      </p>
      <div className="container-foto">
        <img src={fotoCv} alt="Foto CV" className="foto-principale" />
      </div>
    </div>
  );
}
