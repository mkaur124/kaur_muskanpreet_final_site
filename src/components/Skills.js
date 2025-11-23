import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      type: "Language/Framework",
      description: "Markup language used to structure web content."
    },
    {
      name: "CSS3",
      type: "Language/Framework",
      description: "Styling language used for responsive and visually appealing layouts."
    },
    {
      name: "JavaScript",
      type: "Language/Framework",
      description: "Programming language for dynamic and interactive web functionality."
    },
    {
      name: "React",
      type: "Language/Framework",
      description: "Frontend library for building reusable UI components."
    },
    {
      name: "Material-UI (MUI)",
      type: "Tool",
      description: "React component library to build accessible and responsive UI quickly."
    },
    {
      name: "VS Code",
      type: "Tool",
      description: "Preferred code editor with extensions for web development."
    },
    {
      name: "Git & GitHub",
      type: "Tool",
      description: "Version control and code repository for collaboration and CI/CD."
    },
    {
      name: "API Integration",
      type: "Tool",
      description: "Fetching and displaying real-time and historical data from external APIs."
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skills-item">
          <h3>{skill.name} <span className="skill-type">({skill.type})</span></h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;
