import React from "react";
import "./Mengembangkan.css";

const Mengembangkan: React.FC = () => {
  const goBack = () => window.history.back();
  return (
    <div className="mengembangkan-page">
      <div className="mobile-container">
        <header>
          <i className="fas fa-arrow-left icon" onClick={goBack}></i>
          <h1>
            Mengembangkan dan Menyajikan
            <br />
            Hasil Karya
          </h1>
          <div className="header-icons">
            <i className="fas fa-user-circle icon"></i>
            <i className="fas fa-sign-out-alt icon"></i>
          </div>
        </header>
        <main>
          <div className="instruction-box">
            <p>
              - Bersama kelompokkmu sajikan hasil diskusi secara kolaboratif
              melalui kegiatan presentasi
            </p>
          </div>
          <div className="display-area"></div>
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

export default Mengembangkan;
