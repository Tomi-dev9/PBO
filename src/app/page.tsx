import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
