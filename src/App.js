import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header.js'
import { Main } from './Components/Main.js'
import { Footer } from './Components/Footer.js'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />         
    </div>
  );
}

export default App;
