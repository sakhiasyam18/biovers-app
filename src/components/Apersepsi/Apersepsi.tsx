import React from "react";
import { Link } from "react-router-dom";
import "./Apersepsi.css";

const Apersepsi: React.FC = () => {
  // Fungsi untuk kembali ke halaman sebelumnya
  const goBack = () => window.history.back();

  return (
    <div className="apersepsi-page">
      <div className="mobile-container">
        <header>
          <i className="fas fa-arrow-left icon" onClick={goBack}></i>
          <h1>Apersepsi</h1>
          <div className="header-icons">
            <i className="fas fa-user-circle icon"></i>
            <i className="fas fa-sign-out-alt icon"></i>
          </div>
        </header>
        <main>
          {/* Konten utama dari apersepsi.html akan ditambahkan di sini jika ada */}
        </main>
      </div>
    </div>
  );
};

export default Apersepsi;
