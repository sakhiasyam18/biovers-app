import React from "react";
import { Link } from "react-router-dom";
import "./Awal.css";
import logo from "../../assets/images/logo2.png";

const Awal: React.FC = () => {
  return (
    <div className="awal-container">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="BIOVERS Logo" />
          </Link>
        </div>
        <nav>
          <Link to="/menu">Ayo Belajar</Link>
          <a href="#">Ayo Berlatih</a>
          <a href="#">Ayo Diskusi</a>
          <a href="#">Cek Pencapaian</a>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Welcome to <span>BIOVERS</span>
        </h1>
        <Link to="/login" className="login-btn">
          LOGIN
        </Link>
      </section>

      <section className="about">
        <h2>About BIOVERS</h2>
        <p>
          BIOVERS is dedicated to preserving and showcasing the wonders of
          biodiversity. Join us in exploring the ecosystems and learn how you
          can contribute to nature conservation.
        </p>
      </section>

      <footer>
        <p>© 2025 BIOVERS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Awal;
