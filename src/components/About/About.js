import "./About.css";
// import profilPhoto from "../../images/profilPhoto.jpeg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left" style={{ marginTop: "20px" }}>
        <span className="purple-text center-text">
          ✋ Pengenalan{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text center-text">
          "Data Analyst with a strong foundation in physics and a passion for transforming public transportation through data-driven insights. At Transjakarta, I’ve automated reporting workflows, optimized operational metrics using Python and SQL, and delivered actionable customer behavior analyses. Winner of RUBI (Ruang Berbagi Inovasi) for streamlining daily reporting with Tableau Prep. Currently expanding my expertise in data engineering to deepen impact in urban mobility and public service innovation"
        </p>
      </div>
    </section>
  );
};
