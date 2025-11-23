import React from "react";
import Navbar from "./components/Navbar";
import BasicInfo from "./components/BasicInfo";
import Skills from "./components/Skills";
import DeveloperSetup from "./components/DeveloperSetup";
import Work from "./components/Work";
import Resources from "./components/Resources";

function App() {
  return (
    <div>
      <Navbar />
      <BasicInfo />
      <Work
        title="Course Project 1"
        description="A simple React app"
        image="/project1.png"
        link="#"
        tech={["React", "CSS"]}
      />
      <Skills />
      <Resources
        title="React Docs"
        image="/react-logo.png"
        summary="Official React documentation"
        link="https://reactjs.org"
      />
      <DeveloperSetup />
    </div>
  );
}

export default App;
