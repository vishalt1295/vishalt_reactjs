import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import './Portfolio.css';
function App() {
  return (
    <>
    <Navbar />
    <Sections />
    <Footer />
    </>
  );
}

export default App;