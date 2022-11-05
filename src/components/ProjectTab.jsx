import TechStack from "./TechStack";
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
          <h5>{selectedProject.name}</h5>
          <p className="project__desc">{selectedProject.desc}</p>
          <p className="project__text">{selectedProject.text}</p>
          <TechStack stack={selectedProject.stack} />

          <div className="project__links">
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
