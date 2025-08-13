import React from "react";
import { Link } from "react-router-dom";
import "./Awal.css";
import logo from "../../assets/images/logo2.png";
import heroImage from "../../assets/images/bghijaudaunkanan.jpg"; 
const Awal: React.FC = () => {
  return (
    <div className="awal-page-redesign">
      <header className="awal-header-redesign">
        <Link to="/" className="logo-link">
          <img src={logo} alt="BIOVERS Logo" className="logo-redesign" />
        </Link>
        <nav className="awal-nav-redesign">
          <Link to="/menu">Ayo Belajar</Link>
          <a href="#">Ayo Berlatih</a>
          <a href="#">Ayo Diskusi</a>
          <a href="#">Cek Pencapaian</a>
        </nav>
      </header>

      <section
        className="hero-section-redesign"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content-redesign">
          <h1 className="hero-title-redesign">
            Selamat Datang di <span className="biovers-text">BIOVERS</span>
          </h1>
          <p className="hero-subtitle-redesign">
            Jelajahi keajaiban keanekaragaman hayati dan pelajari cara
            berkontribusi untuk pelestarian alam.
          </p>
          <Link to="/login" className="login-button-redesign">
            LOGIN
          </Link>
        </div>
      </section>

      <section className="about-section-redesign">
        <div className="about-content-redesign">
          <h2 className="about-title-redesign">Tentang BIOVERS</h2>
          <p className="about-text-redesign">
            BIOVERS didedikasikan untuk melestarikan dan menampilkan keajaiban
            keanekaragaman hayati. Bergabunglah bersama kami dalam menjelajahi
            ekosistem dan pelajari bagaimana Anda dapat berkontribusi pada
            konservasi alam.
          </p>
        </div>
      </section>

      <footer className="awal-footer-redesign">
        <p>© 2025 BIOVERS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Awal;
