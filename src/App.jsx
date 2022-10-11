import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Ressources from "./Pages/Ressources";
import Outils from "./Pages/Outils";
import Blog from "./Pages/Blog";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/outils" element={<Outils />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
