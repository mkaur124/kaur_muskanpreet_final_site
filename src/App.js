import React from "react";
import Navbar from "./components/Navbar";
import BasicInfo from "./components/BasicInfo";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DeveloperSetup from "./components/DeveloperSetup";
import './styles/Portfolio.css';

function App() {
  return (
    <div>
      <Navbar />
      <BasicInfo />

      {/* Project 1 */}
      <Work
        title="Personal Portfolio Website"
        description="Designed and developed a responsive personal portfolio website using HTML5 and CSS, featuring a welcome banner, skills section, and contact information.Implemented a clean, user-friendly interface with intuitive navigation to showcase web development skills and projects."
        image="/PORTFOLIO1.png"
        link="https://mkaur124.github.io/Project4/"
        tech={["HTML5", "CSS", "JavaScript", "React"]}
      />

      {/* Other Projects */}
      <Work
        title="Winnipeg Air Quality Open Data"
        description="Built a dynamic HTML/CSS/JS web app that queries Winnipeg Open Data API to display real-time and historical air quality measurements, providing users with an interactive search experience. Implemented responsive front-end design and asynchronous data fetching to display location, pollutant type, value, and observation time, ensuring a user-friendly interface and real-time data visualization."
        image="/WPGAIRQUALITY2.png"  // add your project screenshot in public folder
        link="https://github.com/mkaur124/Winnipeg-Air-Quality-Open-Data"
        tech={["HTML5", "CSS", "JavaScript", "React", "API"]}
      />

<Skills
  skills={[
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "API Integration",
    "Asynchronous Programming",
    "Responsive Web Design",
    "Front-End UI/UX Design",
    "Data Visualization",
    "Problem-Solving",
    "Debugging & Testing"
  ]}
/>

<Resources
  title="React Official Docs"
  image="/react-logo.png"
  summary="Comprehensive documentation for React to help build interactive UIs."
  link="https://reactjs.org"
/>
<Resources
  title="Material-UI (MUI)"
  image="/mui-logo.png"
  summary="A React component library used in this portfolio to quickly build responsive and accessible UI components."
  link="https://mui.com"
/>
<Resources
  title="Winnipeg Open Data API"
  image="/open-data-logo.png" // add this image to public folder
  summary="Used to fetch real-time and historical air quality measurements for dynamic data visualization."
  link="https://data.winnipeg.ca/"
/>

      <DeveloperSetup />
    </div>
  );
}

export default App;
