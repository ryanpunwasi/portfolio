import "./Contact.scss";

const Contact = ({ lights }) => {
  return (
    !lights && (
      <div className="contact__icons">
        <a
          href="https://www.linkedin.com/in/ryan-punwasi/"
          target="_blank"
          rel="noreferrer"
          id="linkedin"
        >
          <img src="/img/linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://github.com/ryanpunwasi"
          target="_blank"
          rel="noreferrer"
          id="github"
        >
          <img src="/img/github.png" alt="github" />
        </a>
        <a
          href="https:www.twitter.com/RyanPunwasi"
          target="_blank"
          rel="noreferrer"
          id="twitter"
        >
          <img src="/img/twitter.png" alt="twitter" />
        </a>
      </div>
    )
  );
};

export default Contact;
