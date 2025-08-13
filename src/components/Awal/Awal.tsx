import React from "react";
import { Link } from "react-router-dom";
import "./Awal.css";
import logo from "../../assets/images/logo2.png";
import heroImage from "../../assets/images/bgkupukupu.jpg";

const Awal: React.FC = () => {
  return (
    <div className="awal-page">
      <header className="awal-header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="BIOVERS Logo" className="logo-img" />
          <span>BIOVERS</span>
        </Link>
        <nav className="awal-nav">
          <Link to="/menu">Ayo Belajar</Link>
          <a href="#">Ayo Berlatih</a>
          <a href="#">Ayo Diskusi</a>
          <a href="#">Cek Pencapaian</a>
        </nav>
        <Link to="/login" className="login-btn-header">
          Login
        </Link>
      </header>

      <main className="awal-main">
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              Jelajahi Keajaiban Keanekaragaman Hayati
            </h1>
            <p className="hero-subtitle">
              Bergabunglah dalam petualangan untuk memahami dan melestarikan
              kekayaan alam kita bersama BIOVERS.
            </p>
            <Link to="/menu" className="hero-cta-button">
              Mulai Belajar Sekarang
            </Link>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2 className="section-title">Tentang BIOVERS</h2>
            <p className="section-text">
              BIOVERS adalah platform edukasi interaktif yang didedikasikan
              untuk menampilkan keajaiban keanekaragaman hayati. Misi kami
              adalah meningkatkan kesadaran dan mengajak semua orang untuk
              berkontribusi aktif dalam upaya konservasi alam.
            </p>
          </div>
        </section>
      </main>

      <footer className="awal-footer">
        <p>© 2025 BIOVERS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Awal;
