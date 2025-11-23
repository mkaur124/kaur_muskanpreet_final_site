# Muskanpreet Kaur - Personal Portfolio Website

This is my personal portfolio website showcasing my web development projects, skills, and developer setup. The site is built with React and deployed using Docker.

---

## **Live Demo (Dockerized)**

The portfolio site can be run locally in a Docker container at:
http://localhost:5575

## **Project Structure**
kaur_muskanpreet_final_site/
├─ Dockerfile
├─ README.md
├─ package.json
├─ public/
└─ src/

- `src/` → React source code
- `public/` → Static assets (images, icons, etc.)
- `Dockerfile` → Builds and serves the production app via Nginx

---

## **Getting Started**

### **Prerequisites**
- Node.js (for local development)
- npm
- Docker installed and running

---

### **1. Running Locally (Development)**
To see your changes in real time:

```bash
npm install
npm start
http://localhost:3000

Building Production Version

Before running Docker, create a production build:

npm run build

The build will be placed in the build/ folder.

Building and Running Docker Container

Step 1: Build the Docker image:

docker build -t kaur_muskanpreet_coding_assignment14 .


Step 2: Run the container:

docker run -d -p 5575:80 kaur_muskanpreet_coding_assignment14


Access your portfolio at http://localhost:5575

Step 3: Stop the container (if needed):

docker stop kaur_muskanpreet_coding_assignment14

4. Portfolio Sections

Basic Information – Name, profile picture, short introduction

Work / Projects – Detailed project cards with images, descriptions, tech used, and links

Skills – Languages, frameworks, tools, with descriptions

Resources – External documentation and libraries used

Developer Setup – VSCode, terminal, preferred editor font

5. Skills

Languages / Frameworks: HTML5, CSS3, JavaScript, React

Tools: VSCode, Git, Docker, Material-UI

6. Resources

React Official Docs
 – Comprehensive documentation for React

Material-UI
 – Component library used for styling

This portfolio is built for academic purposes for Red River College.
All assets and images are included in the public/ folder.