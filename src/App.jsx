import React from "react";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Price from "./components/Price";



const App = () => {
  return (
    <div style={{ fontFamily: "light, sans-serif" }}>
      <Navbar />
      <Header />
      <h2 className='s' style={{ marginTop: "150px", fontSize: "32px", textAlign: "center" }} >Our Services</h2>
      <Services />

      <Price />
      <Footer />

    </div>
  );
};

export default App;
