import React from "react";
import { Routes, Route } from "react-router-dom"; // chỉ cần Routes, Route
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles/MainStyle.css";

function App() {
  return (
    <>
      <Header />

      {/* Main content area */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
