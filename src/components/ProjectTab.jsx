import "./ProjectTab.scss";

const ProjectTab = ({ selectedProject, setTab, setSelectedProject }) => {
  const back = () => {
    setSelectedProject(null);
    setTab("list");
  };
  return (
    <div>
      <button onClick={back} className="project__back">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      {selectedProject}
    </div>
  );
};

export default ProjectTab;
