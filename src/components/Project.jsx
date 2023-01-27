import TechStack from "./TechStack";
import "./ProjectTab.scss";

const Project = ({ project }) => {
  return (
    <div className="project__tab">
      <div className="project__info">
        <img src={`/img/${project.icon}`} alt="thumbnail" />
        <div>
          <h5>{project.name}</h5>
          <p className="project__desc">{project.desc}</p>
          <p className="project__text">{project.text}</p>
          <TechStack stack={project.stack} />

          <div className="project__links">
            <a href={project.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
            {project.liveSite && (
              <a href={project.liveSite} target="_blank" rel="noreferrer">
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

export default Project;
