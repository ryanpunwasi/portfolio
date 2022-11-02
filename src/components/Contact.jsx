import "./Contact.scss";

const Contact = ({ lights }) => {
  return (
    <>
      {!lights && (
        <div className="contact__icons">
          <span id="linkedin">
            <img src="/img/linkedin.png" alt="linkedin" />
          </span>
          <span id="github">
            <img src="/img/github.png" alt="github" />
          </span>
          <span id="twitter">
            <img src="/img/twitter.png" alt="twitter" />
          </span>
          <span id="creddle">
            <img src="/img/cv.png" alt="cv" />
          </span>
        </div>
      )}
      {lights && (
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/ryan-punwasi/"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
          >
            <img src="/img/linkedin.png" alt="linkedin" className="light" />
          </a>
          <a
            href="https://github.com/ryanpunwasi"
            target="_blank"
            rel="noreferrer"
            id="github"
          >
            <img src="/img/github.png" alt="github" className="light" />
          </a>
          <a
            href="https://www.twitter.com/RyanPunwasi"
            target="_blank"
            rel="noreferrer"
            id="twitter"
          >
            <img src="/img/twitter.png" alt="twitter" className="light" />
          </a>
          <a
            href="https://resume.creddle.io/resume/cz0ik4eo5qh"
            target="_blank"
            rel="noreferrer"
            id="creddle"
          >
            <img src="/img/cv.png" alt="cv" className="light" />
          </a>
        </div>
      )}
    </>
  );
};

export default Contact;
