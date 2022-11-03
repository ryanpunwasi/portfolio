import "./ProjectTab.scss";

const ProjectTab = ({ selectedProject, setTab, setSelectedProject }) => {
  const back = () => {
    setSelectedProject(null);
    setTab("list");
  };
  return (
    <div className="project__tab">
      <button onClick={back} className="project__back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="project__info">
        <img src={`/img/${selectedProject.icon}`} alt="thumbnail" />
        <div>
          <h6>{selectedProject.name}</h6>
          <p>{selectedProject.desc}</p>

          <div>
            <a href={selectedProject.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
            {selectedProject.liveSite && (
              <a
                href={selectedProject.liveSite}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
