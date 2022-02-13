import * as React from "react";
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Tittle from './components/Tittle';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CopyRight from './components/CopyRight';

function App() {

  return (
    <div id = "App">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <div id="page-wrap">
        <ScrollToTop />
        <Tittle />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
        <CopyRight />
      </div>
      </div>
  );
}

export default App;
