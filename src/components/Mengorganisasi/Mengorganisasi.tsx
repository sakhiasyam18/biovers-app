import React from "react";
import "./Mengorganisasi.css";

const Mengorganisasi: React.FC = () => {
  const goBack = () => window.history.back();
  return (
    <div className="mengorganisasi-page">
      <div className="mobile-container">
        <header>
          <i className="fas fa-arrow-left icon" onClick={goBack}></i>
          <h1>Mengorganisasi</h1>
          <div className="header-icons">
            <i className="fas fa-user-circle icon"></i>
            <i className="fas fa-sign-out-alt icon"></i>
          </div>
        </header>
        <main>
          <div className="instruction-box">
            <ul>
              <li>
                Pelajarilah konsep-konsep yang berhubungan dengan materi
                keanekaragaman hayati melalui fitur E-Biodictionary, E-Flipbook,
                dan Artificial Intelligence.
              </li>
              <li>Jawablah pertanyaan yang ada untuk memeperkuat pemahaman</li>
            </ul>
          </div>
          <div className="feature-list">
            <button className="feature-button">
              <i className="fas fa-search feature-icon"></i>
              <span>AI</span>
            </button>
            <button className="feature-button">
              <i className="fas fa-book-open feature-icon"></i>
              <span>e-Biodictionary</span>
            </button>
            <button className="feature-button">
              <i className="fas fa-book-open feature-icon"></i>
              <span>e-Flipbook</span>
            </button>
          </div>
          <button className="action-button">
            Geser kanan untuk menjawab pertanyaan
          </button>
        </main>
      </div>
    </div>
  );
};

export default Mengorganisasi;
