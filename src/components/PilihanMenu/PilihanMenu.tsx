import React from "react";
import { Link } from "react-router-dom";
import "./PilihanMenu.css";
import logo from "../../assets/images/logo2.png";
import backButton from "../../assets/images/tombol8.png";
import userButton from "../../assets/images/tombol7.png";
import tombol1 from "../../assets/images/tombol1.png";
import tombol2 from "../../assets/images/tombol2.png";
import tombol3 from "../../assets/images/tombol3.png";
import tombol4 from "../../assets/images/tombol4.png";
import tombol5 from "../../assets/images/tombol5.png";
import tombol6 from "../../assets/images/tombol6.png";

const PilihanMenu: React.FC = () => {
  return (
    <div className="menu-page">
      <header>
        <div className="back-button">
          <Link to="/">
            <img src={backButton} alt="Back" />
          </Link>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="user-icon">
          <Link to="/login">
            <img src={userButton} alt="User" />
          </Link>
        </div>
      </header>

      <section className="adventure">
        <div className="adventure-content">
          <h1>Let's Go On An Adventure</h1>
          <div className="adventure-items">
            <div className="adventure-item">
              <Link to="/apersepsi">
                <img src={tombol1} alt="Apersepsi" />
              </Link>
            </div>
            <div className="adventure-item">
              <Link to="/orientasi">
                <img src={tombol2} alt="Orientasi" />
              </Link>
            </div>
            <div className="adventure-item">
              <Link to="/mengorganisasi">
                <img src={tombol3} alt="Mengorganisasi" />
              </Link>
            </div>
            <div className="adventure-item">
              <Link to="/membimbing">
                <img src={tombol4} alt="Membimbing" />
              </Link>
            </div>
            <div className="adventure-item">
              <Link to="/mengembangkan">
                <img src={tombol5} alt="Mengembangkan" />
              </Link>
            </div>
            <div className="adventure-item">
              <Link to="/menganalisis">
                <img src={tombol6} alt="Menganalisis" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 BIOVERS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PilihanMenu;
