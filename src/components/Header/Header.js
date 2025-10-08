import "./Header.css";
import profilPhoto from "../../images/profilPhoto.jpeg";


export default function Header() {
  return (
    <section className="header">
      <header>
        <h1 className="header-title"> Hello. I'm</h1>

        <div className="about-right" style={{ paddingTop: "20px" }}>
          <img src={profilPhoto} alt="" style={{ paddingTop: "0px", marginBottom: "20px", borderRadius: "15px" }} />
        </div>

        <div className="header-title-box" >
          <span className="header-title-name" style={{ textAlign: "center", marginBottom: "0px" }}>Adila Zahra Faradisa</span>
          {/* Adila Zahra Faradisa */}
        </div>

      </header>
    </section>
  );
}
