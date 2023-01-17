import React, { useEffect, useState } from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import SideBar from './components/SideBar.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent>
        <SideBar />
        <Products />
      </MainContent>
      <Footer />
    </div>
  );
}




export default App;
