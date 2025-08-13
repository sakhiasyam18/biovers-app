import React from "react";
import { Link } from "react-router-dom"; // Tambahkan Link untuk navigasi
import "./Menganalisis.css";

const Menganalisis: React.FC = () => {
  const goBack = () => window.history.back();

  return (
    // 1. Tambahkan wrapper div dengan className unik
    <div className="menganalisis-page">
      <div className="mobile-container">
        <header>
          <i className="fas fa-arrow-left icon" onClick={goBack}></i>
          <h1>Mengevaluasi</h1>
          <div className="header-icons">
            {/* Ganti <i> dengan Link jika perlu */}
            <i className="fas fa-user-circle icon"></i>
            <i className="fas fa-sign-out-alt icon"></i>
          </div>
        </header>
        <main>
          <div className="instruction-box">
            <ul>
              <li>
                Berikan tanggapan atau masukkan dari hasil presentasi kelompok
                lain.
              </li>
              <li>
                Masukkan atau tanggapan bisa berdasarkan solusi yang diambil
                atau permasalahan yang diangkat
              </li>
            </ul>
          </div>
          <div className="display-area">
            <p>Tidak ada pesan yang ditemukan.</p>
            <button className="next-button">NEXT</button>
          </div>
        </main>
        <footer>
          <div className="input-area">
            <input type="text" placeholder="Kirim hasil diskusi kel..." />
            <button className="send-button">
              <i className="fas fa-paper-plane icon"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menganalisis;
