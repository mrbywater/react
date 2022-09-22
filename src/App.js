import React from 'react';
import './App.css';
import { Header } from './Components/Header.js'
import { Main } from './Components/Main.js'
import { Footer } from './Components/Footer.js'
import { OlxPage } from "./Components/Olx.js";
import { BesplatkaPage } from "./Components/Besplatka.js";
import { DomriaPage } from "./Components/Domria.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>   
    <Header />   
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Olx" element={<OlxPage />} />
          <Route path="/Besplatka" element={<BesplatkaPage />} />
          <Route path="/Domria" element={<DomriaPage />} />
        </Routes>      
      <Footer />            
    </div>  
  );
}

export default App;
