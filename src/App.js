import logo from './logo.svg';
import './App.css';
import About from "./components/Home.js";
import Experience from './sources/Experience.js';
import Card from './project/Card.js';
import Projects from './project/Projects.js';
import Contact from './components/Contact.js';
import Skills from './components/skillsSet/Skills.js';
import Navbar from './project/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import Leetcode from './components/LeetcodeCard.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Projects />
      <Leetcode />
      <Skills />
      <Contact />
      {/* <Experience /> */}
    </BrowserRouter>
  );
}

export default App;
