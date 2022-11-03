import "./ProjectListTabItem.scss";

const ProjectListTabItem = function ({ project, setSelectedProject, setTab }) {
  const onClick = () => {
    setSelectedProject(project);
    setTab("project");
  };
  return (
    <article className="project__item" onClick={onClick}>
      {project.name}
    </article>
  );
};

export default ProjectListTabItem;
