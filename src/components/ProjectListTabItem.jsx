import "./ProjectListTabItem.scss";

const ProjectListTabItem = function ({ name, setSelectedProject, setTab }) {
  const onClick = () => {
    setSelectedProject(name);
    setTab("project");
  };
  return (
    <article className="project__item" onClick={onClick}>
      {name}
    </article>
  );
};

export default ProjectListTabItem;
