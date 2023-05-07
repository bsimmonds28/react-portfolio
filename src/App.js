import React from "react";
//import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
