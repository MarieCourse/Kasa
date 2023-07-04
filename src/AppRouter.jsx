import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import FicheLogement from "./pages/Fiche Logement/fiche-logement";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/fiches/:id" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
