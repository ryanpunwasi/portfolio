import { useState } from "react";
import ProjectListTab from "./ProjectListTab";
import ProjectTab from "./ProjectTab";
import "./Projects.scss";

const Projects = props => {
  const [tab, setTab] = useState("list");
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="projects">
      {tab === "list" && (
        <ProjectListTab
          setTab={setTab}
          setSelectedProject={setSelectedProject}
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
