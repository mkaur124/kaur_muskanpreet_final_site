import React from 'react';
import Navbar from './components/Navbar';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';
import './styles/Portfolio.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* HOME / BASIC INFO */}
      <section id="basic-info">
        <BasicInfo />
      </section>

      {/* WORK SECTION */}
      <section id="work">
        <Work
          title="Personal Portfolio Website"
          description="Designed and developed a responsive personal portfolio website using HTML5 and CSS, featuring a welcome banner, skills section, and contact information. Implemented a clean, user-friendly interface with intuitive navigation to showcase web development skills and projects."
          image="/PORTFOLIO1.png"
          link="https://mkaur124.github.io/Project4/"
          tech={['HTML5', 'CSS', 'JavaScript', 'React']}
        />
        <Work
          title="Winnipeg Air Quality Open Data"
          description="Built a dynamic HTML/CSS/JS web app that queries Winnipeg Open Data API to display real-time and historical air quality measurements, providing users with an interactive search experience. Implemented responsive front-end design and asynchronous data fetching to display location, pollutant type, value, and observation time, ensuring a user-friendly interface and real-time data visualization."
          image="/WPGAIRQUALITY2.png"
          link="https://github.com/mkaur124/Winnipeg-Air-Quality-Open-Data"
          tech={['HTML5', 'CSS', 'JavaScript', 'React', 'API']}
        />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" data-testid="skills">
        <h2>Skills</h2>
        <Skills />
      </section>

      {/* RESOURCES SECTION */}
      <section id="resources" data-testid="resources">
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
          image="/open-data-logo.png"
          summary="Used to fetch real-time and historical air quality measurements for dynamic data visualization."
          link="https://data.winnipeg.ca/"
        />
      </section>

      {/* DEVELOPER SETUP */}
      <section id="developer-setup" data-testid="developer-setup">
        <h2>Developer Setup</h2>
        <DeveloperSetup />
      </section>
    </div>
  );
}

export default App;
