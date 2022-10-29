import { useState } from "react";
import ProjectListTab from "./ProjectListTab";
import ProjectTab from "./ProjectTab";
import "./Projects.scss";

const Projects = props => {
  const [tab, setTab] = useState("list");
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="projects">
      {tab === "list" && <ProjectListTab />}
      {tab === "project" && <ProjectTab project={selectedProject} />}
    </div>
  );
};

export default Projects;
