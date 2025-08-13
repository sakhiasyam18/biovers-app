import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo2.png";
import loginBg from "../../assets/images/bghijaudaunkanan.jpg";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div
          className="login-image-panel"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
          <div className="image-overlay">
            <Link to="/" className="image-logo-container">
              <img src={logo} alt="BIOVERS Logo" className="image-logo" />
            </Link>
            <h2>Menjelajah Dunia Hijau</h2>
            <p>Masuk untuk melanjutkan petualangan Anda.</p>
          </div>
        </div>

        <div className="login-form-panel">
          <div className="form-content">
            <h3>Selamat Datang Kembali!</h3>
            <p className="form-subtitle">Silakan masukkan detail akun Anda.</p>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="email">Alamat Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="contoh@email.com"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="form-options">
                <a href="#" className="forgot-password">
                  Lupa Password?
                </a>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <div className="register-prompt">
              Belum punya akun? <a href="#">Daftar sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
