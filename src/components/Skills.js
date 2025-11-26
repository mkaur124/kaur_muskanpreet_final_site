import React from 'react';

const skills = [
  {
    id: 'html5',
    name: 'HTML5',
    type: 'Language/Framework',
    description: 'Markup language used to structure web content.',
  },
  {
    id: 'css3',
    name: 'CSS3',
    type: 'Language/Framework',
    description:
      'Styling language used for responsive and visually appealing layouts.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    type: 'Language/Framework',
    description:
      'Programming language for dynamic and interactive web functionality.',
  },
  {
    id: 'react',
    name: 'React',
    type: 'Language/Framework',
    description: 'Frontend library for building reusable UI components.',
  },
  {
    id: 'mui',
    name: 'Material-UI (MUI)',
    type: 'Tool',
    description:
      'React component library to build accessible and responsive UI quickly.',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    type: 'Tool',
    description: 'Preferred code editor with extensions for web development.',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    type: 'Tool',
    description:
      'Version control and code repository for collaboration and CI/CD.',
  },
  {
    id: 'api',
    name: 'API Integration',
    type: 'Tool',
    description:
      'Fetching and displaying real-time and historical data from external APIs.',
  },
];

function Skills() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} data-testid={`skill-${skill.id}`}>
          <strong>{skill.name}</strong> – {skill.type}
          <p>{skill.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
