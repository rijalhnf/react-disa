import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text center-text">
          ✋ Pengenalan{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text center-text">
          "Selamat datang di profil saya! Saya Adila Zahra Faradisa, lulusan Fisika dari Institut Teknologi Sepuluh Nopember (ITS) Surabaya. Saya telah memiliki pengalaman selama 2 tahun di bidang Data Management di salah satu Badan Usaha Milik Daerah (BUMD) di Jakarta. Saya sangat antusias dan bersemangat dalam menjelajahi dunia teknologi informasi, khususnya dalam bidang Data Management/Data Engineering. Terima kasih atas kunjungan Anda di halaman saya!"
        </p>
      </div>
      <div className="about-right" style={{ paddingTop: "20px" }}>
        <img src={iconImage} alt="" style={{ paddingTop: "0px", borderRadius: "15px" }} />
      </div>
    </section>
  );
};
