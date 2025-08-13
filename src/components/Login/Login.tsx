import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo2.png";

const Login: React.FC = () => {
  return (
    <div className="login-page-redesign">
      <div className="login-container-redesign">
        <div className="login-header-redesign">
          <Link to="/" className="logo-link-login">
            <img
              src={logo}
              alt="BIOVERS Logo"
              className="logo-login-redesign"
            />
          </Link>
          <h2 className="welcome-text-redesign">Selamat Datang Kembali</h2>
        </div>
        <form className="login-form-redesign">
          <div className="input-group-redesign">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div className="input-group-redesign">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan password Anda"
              required
            />
          </div>
          <button type="submit" className="login-button-redesign">
            MASUK
          </button>
        </form>
        <div className="login-footer-redesign">
          <p className="register-text-redesign">
            Belum punya akun?{" "}
            <Link to="#" className="register-link-redesign">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
