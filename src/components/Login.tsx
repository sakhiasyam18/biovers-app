import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo2.png";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <Link to="/">
          <img src={logo} alt="BIOVERS Logo" className="logo" />
        </Link>
        <h1>SELAMAT DATANG</h1>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="register">
            <a href="#register">Belum Punya Akun? Daftar</a>
          </div>
          <Link to="/menu" className="login-button">
            MASUK
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
