import { useState } from "react";
import ProjectListTab from "./ProjectListTab";
import ProjectTab from "./ProjectTab";
import "./Projects.scss";

const Projects = () => {
  const [tab, setTab] = useState("list");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      name: "Valentnost",
      desc: "A single-page web application that helps in the memorization of the names and symbols of the elements of the periodic table",
      text: "This project was born out of my desire to acquire the obscure skill of being able to match the names and symbols of all the elements of the periodic table. Hopefully high-school students and chemistry enthusiasts can find it useful though! To get this project done, I read up on colour theory, strengthened my understanding of positioning and layout with CSS flexbox and grid, and adhered to test-driven development by writing and using unit tests throughout the development process.",
      repo: "https://github.com/ryanpunwasi/valentnost",
      liveSite: "https://valentnost.app",
      icon: "science.svg",
      stack: ["HTML", "CSS", "React", "Redux", "Jest"],
    },
    {
      id: 1,
      name: "Semitone",
      desc: "A single-page web application where users can practice identifying notes, octaves, chords, and scales by sound",
      text: "I built Semitone with the goal of helping musicians develop their ability to correctly identify pitch. To create this project, I learned about state management with Redux and how audio was used in the browser. I implemented the layout primarily with Bootstrap, using custom CSS to add my own visual style.",
      repo: "https://github.com/ryanpunwasi/semitone",
      liveSite: "https://semitone.io",
      icon: "piano-2.svg",
      stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
    },
    {
      id: 2,
      name: "Portfolio",
      desc: "A website displaying my portfolio of personal projects",
      text: "My portfolio website was made to give prospective employers a quick insight into who I am, what I have been working on, as well as access to all my relevant links. I took the opportunity to have some fun and learn about various web-related features including CSS transitions, animations, and the Intersection Observer API. Hopefully, you were able to learn a little bit about me!",
      repo: "https://github.com/ryanpunwasi/portfolio",
      liveSite: "http://localhost:3000",
      icon: "palette.svg",
      stack: ["HTML5", "CSS3", "React"],
    },
    {
      id: 3,
      name: "BayStreetBets",
      desc: "A full-stack web app where users can create and participate in simulated stock trading competitions",
      text: "BayStreetBets was made with two other collaborators for a final project at Lighthouse Lab's Web Development Bootcamp. I was able to implement authentication and resource authorization with JSON Web Tokens; work on form validation; implement the creation of stock-trading competitions",
      repo: "https://github.com/ryanpunwasi/BayStreetBets",
      liveSite: null,
      icon: "investment.svg",
      stack: [
        "HTML5",
        "CSS3",
        "Sass",
        "Express",
        "React",
        "NodeJS",
        "PostgreSQL",
      ],
    },
    {
      id: 4,
      name: "Pinnet",
      desc: "A full-stack web app where users can create and share maps with pinned locations",
      repo: "https://github.com/ryanpunwasi/pinnet",
      text: "Pinnet was made with two other collaborators for a mid-term project at Lighthouse Lab's Web Development Bootcamp. I did work on both the front-end and back-end, implementing features like authentication and the ability to browse, create and favourite maps. I had the chance to write complex SQL queries, create interactive maps with Leaflet, work with promises, and write endpoints with Express.",
      liveSite: null,
      icon: "push-pin.svg",
      stack: [
        "HTML5",
        "Sass",
        "Bootstrap",
        "jQuery",
        "Express",
        "NodeJS",
        "EJS",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <div className="projects">
      {tab === "list" && (
        <ProjectListTab
          setTab={setTab}
          setSelectedProject={setSelectedProject}
          projects={projects}
        />
      )}
      {tab === "project" && (
        <ProjectTab
          setTab={setTab}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
