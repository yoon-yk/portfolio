import React, { useContext, Component } from "react";
import Endorsement from "./components/Endorsement/Endorsement";
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div id='top'>

      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Endorsement />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
    );
  }
}

export default App;
