import { useEffect, useState } from "react";
import "./SectionText.scss";
const SectionText = function ({ text }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let targets = document.querySelectorAll(".section__text");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    targets.forEach(target => observer.observe(target));
  });

  return (
    <div className="section__text__container">
      <p className={`section__text ${show ? "show" : ""}`}>
        I am a full-stack web developer with a passion for creating applications
        with engaging and intuitive user interfaces. I have a background in
        nursing, which has fostered my sense of resilience and problem-solving.
        Over time, my interest in programming grew and I decided to pivot into
        the software industry. I have experience working on small projects, both
        as an individual and with a team. I hope to leverage my insight and
        skills to join a team and build software that is impactful!
        <br />
        <br />
        Outside of software, I have two other interests: filmmaking/photography
        and sports. With regards to filmmaking and photography, I'm always
        learning about cinematography, video editing, and composition with the
        goal of producing my own content in the future. When it comes to sports,
        I'm a big NBA and NFL fan who enjoys learning about the strategic and
        analytic side of sports.
        <br />
        <br />
        To create this website, I used HTML5, CSS3, and React. I took the
        opportunity to learn about and implement various web-related features
        including CSS transitions/animations, the Intersection Observer API, and
        scroll events. I also took the photos! 📸
      </p>
    </div>
  );
};

export default SectionText;
