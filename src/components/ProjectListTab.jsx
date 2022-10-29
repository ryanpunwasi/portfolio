import ProjectListTabItem from "./ProjectListTabItem";

import "./ProjectListTab.scss";

const ProjectListTab = () => {
  const projects = [
    {
      name: "Valentnost",
      desc: "A web app that helps in the memorization of the periodic table",
      repo: "https://github.com/ryanpunwasi/valentnost",
      liveSite: "https://valentnost.app",
      icon: "",
      stack: ["HTML", "CSS", "React", "Redux"],
    },
    {
      name: "Semitone",
      desc: "A web app where users can practice identifying notes, octaves, chords, and scales by sound",
      repo: "https://github.com/ryanpunwasi/semitone",
      liveSite: "https://semitone.io",
      icon: "",
      stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
    },
  ];

  const renderedProjects = projects.map(project => <ProjectListTabItem />);
  return <section>{renderedProjects}</section>;
};

export default ProjectListTab;
