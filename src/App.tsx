// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Impor semua komponen halaman yang akan kita buat
import Awal from "./components/Awal/Awal";
import Login from "./components/Login/Login";
import PilihanMenu from "./components/PilihanMenu/PilihanMenu";
import Apersepsi from "./components/Apersepsi/Apersepsi";
import Orientasi from "./components/Orientasi/Orientasi";
import Mengorganisasi from "./components/Mengorganisasi/Mengorganisasi";
import Membimbing from "./components/Membimbing/Membimbing";
import Mengembangkan from "./components/Mengembangkan/Mengembangkan";
import Menganalisis from "./components/Menganalisis/Menganalisis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Awal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<PilihanMenu />} />
        <Route path="/apersepsi" element={<Apersepsi />} />
        <Route path="/orientasi" element={<Orientasi />} />
        <Route path="/mengorganisasi" element={<Mengorganisasi />} />
        <Route path="/membimbing" element={<Membimbing />} />
        <Route path="/mengembangkan" element={<Mengembangkan />} />
        <Route path="/menganalisis" element={<Menganalisis />} />
        {/* Rute default jika tidak ada yang cocok, kembali ke halaman awal */}
        <Route path="*" element={<Awal />} />
      </Routes>
    </Router>
  );
}

export default App;
