import { useState } from "react";
import ProjectListTab from "./ProjectListTab";
import ProjectTab from "./ProjectTab";
import "./Projects.scss";

const Projects = props => {
  const [tab, setTab] = useState("list");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      name: "Valentnost",
      desc: "A single-page web application that helps in the memorization of the names and symbols of the elements of the periodic table.",
      repo: "https://github.com/ryanpunwasi/valentnost",
      liveSite: "https://valentnost.app",
      icon: "science.svg",
      stack: ["HTML", "CSS", "React", "Redux"],
    },
    {
      id: 1,
      name: "Semitone",
      desc: "A single-page web application where users can practice identifying notes, octaves, chords, and scales by sound.",
      repo: "https://github.com/ryanpunwasi/semitone",
      liveSite: "https://semitone.io",
      icon: "piano-2.svg",
      stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
    },
    {
      id: 2,
      name: "Portfolio",
      desc: "A website displaying my portfolio of projects",
      repo: "https://github.com/ryanpunwasi/portfolio",
      liveSite: "https://semitone.io",
      icon: "palette.svg",
      stack: ["HTML5", "CSS3", "React"],
    },
    {
      id: 3,
      name: "BayStreetBets",
      desc: "A web app where users can practice buying and selling stocks ",
      repo: "https://github.com/ryanpunwasi/semitone",
      liveSite: null,
      icon: "investment.svg",
      stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
    },
    {
      id: 4,
      name: "Pinnet",
      desc: "A web app where users can practice identifying notes, octaves, chords, and scales by sound",
      repo: "https://github.com/ryanpunwasi/semitone",
      liveSite: null,
      icon: "push-pin.svg",
      stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
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
