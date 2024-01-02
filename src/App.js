/** @format */

import "./App.css";
import { About } from "./Components/About";
import Contact from "./Components/Contact";
import { Home } from "./Components/Home";
import { Icons } from "./Components/Icons";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Icons />
      <div className="bg-wrapper">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
