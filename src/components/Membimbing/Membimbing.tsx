import React from "react";
import { Link } from "react-router-dom";
import "./Membimbing.css";

const Membimbing: React.FC = () => {
  const goBack = () => window.history.back();

  return (
    <div className="membimbing-page">
      <header>
        <div className="back-button">
          <a onClick={goBack} style={{ cursor: "pointer" }}>
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <h1>Membimbing Penyelidikan Individual maupun Kelompok</h1>
        <div className="profile-icon">
          <Link to="/login">
            <i className="fas fa-user-circle"></i>
          </Link>
        </div>
      </header>
      <section className="content-section">
        <div className="card">
          <ul className="instruction-list">
            <li>
              Diskusikan dengan teman sekelompok mengenaii permasalahan yang
              diperoleh.
            </li>
            <li>
              Lakukanlah kegiatan observasi, dan/ atau wawancara, dan/atau
              survei untuk mengumpulkan informasi atau data untuk menyelesaikan
              permasalahan yang didapat.
            </li>
            <li>
              Kumpulkan hasil kegiatan pengumpulan data pada kolom yang
              disediakan.
            </li>
            <li>
              Berdasarkan data yang diperoleh dari kegiatan observasi dan/
              wawancara dan/ survei tulislah solusi dari permasalahan yang
              didapat
            </li>
          </ul>
          <a href="#" className="action-button">
            <i className="fas fa-file-alt"></i>
            <span>Unduh Lembar Pengerjaan</span>
            <i className="fas fa-download icon-right"></i>
          </a>
          {/* ... Tambahkan tombol aksi lainnya di sini ... */}
        </div>
      </section>
    </div>
  );
};

export default Membimbing;
