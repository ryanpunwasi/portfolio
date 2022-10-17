import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact__icons">
      <a
        href="https://www.linkedin.com/in/ryan-punwasi/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/img/linkedin.png" alt="linkedin" />
      </a>
      <a href="https://github.com/ryanpunwasi" target="_blank" rel="noreferrer">
        <img src="/img/github.png" alt="github" />
      </a>
      <a
        href="https:www.twitter.com/RyanPunwasi"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/img/twitter.png" alt="twitter" />
      </a>
    </div>
  );
};

export default Contact;
