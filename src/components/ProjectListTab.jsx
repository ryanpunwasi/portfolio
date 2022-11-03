import ProjectListTabItem from "./ProjectListTabItem";

import "./ProjectListTab.scss";

const ProjectListTab = ({ setTab, setSelectedProject, projects }) => {
  const renderedProjects = projects.map(project => (
    <ProjectListTabItem
      key={project.id}
      setTab={setTab}
      setSelectedProject={setSelectedProject}
      project={project}
    />
  ));
  return <section className="project__list">{renderedProjects}</section>;
};

export default ProjectListTab;
