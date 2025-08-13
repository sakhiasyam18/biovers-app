import React from "react";
import "./Orientasi.css";

const Orientasi: React.FC = () => {
  const goBack = () => window.history.back();

  return (
    <div className="orientasi-page">
      <div className="mobile-container">
        <header>
          <i className="fas fa-arrow-left icon" onClick={goBack}></i>
          <h1>
            Mengorientasikan
            <br />
            Siswa Pada Masalah
          </h1>
        </header>
        <main>
          <div className="instruction-box">
            <ul>
              <li>
                Diskusikanlah dengan teman sekelompok mengenai permasalahan yang
                diperoleh.
              </li>
              <li>
                Lakukanlah kegiatan observasi, dan/atau wawancara, dan/atau
                survei untuk mengumpulkan informasi atau data untuk
                menyelesaikan permasalahan yang didapat.
              </li>
              <li>
                Kumpulkan hasil kegiatan pengumpulan data pada kolom yang
                disediakan.
              </li>
              <li>
                Berdasarkan data yang diperoleh dari kegiatan observasi
                dan/wawancara dan/survei tulislah solusi dari permasalahan yang
                didapat
              </li>
            </ul>
          </div>
          <div className="action-list">
            <div className="action-item">
              <i className="fas fa-file-alt left-icon"></i>
              <span>Unduh Lembar Pengerjaan</span>
              <div className="right-icon-wrapper">
                <i className="fas fa-download right-icon"></i>
              </div>
            </div>
            <div className="action-item">
              <i className="fas fa-file-signature left-icon"></i>
              <span>Pengumpulan Lembar Observasi</span>
              <div className="right-icon-wrapper">
                <i className="fas fa-cloud-arrow-up right-icon"></i>
              </div>
            </div>
            <div className="action-item">
              <i className="fas fa-users left-icon"></i>
              <span>Pengumpulan Lembar Wawancara</span>
              <div className="right-icon-wrapper">
                <i className="fas fa-cloud-arrow-up right-icon"></i>
              </div>
            </div>
            <div className="action-item">
              <i className="fas fa-poll-h left-icon"></i>
              <span>Pengumpulan Hasil Survei</span>
              <div className="right-icon-wrapper">
                <i className="fas fa-cloud-arrow-up right-icon"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orientasi;
