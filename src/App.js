import React from "react";
import { Routes, Route } from "react-router-dom"; // chỉ cần Routes, Route
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Java1 from "./pages/Blog/java1";
import Java2 from "./pages/Blog/java2";
import Java3 from "./pages/Blog/java3";
import Java4 from "./pages/Blog/java4";
import Js1 from "./pages/Blog/js1";
import Js2 from "./pages/Blog/js2";
import Js3 from "./pages/Blog/js3";
import Js4 from "./pages/Blog/js4";
import Compare from "./pages/Blog/compare";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/java1" element={<Java1 />} />
          <Route path="/blog/java2" element={<Java2 />} />
          <Route path="/blog/java3" element={<Java3 />} />
          <Route path="/blog/java4" element={<Java4 />} />
          <Route path="/blog/js1" element={<Js1 />} />
          <Route path="/blog/js2" element={<Js2 />} />
          <Route path="/blog/js3" element={<Js3 />} />
          <Route path="/blog/js4" element={<Js4 />} />
          <Route path="/blog/compare" element={<Compare />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
