import { useEffect, useState } from "react";
import "./SectionText.scss";
const SectionText = function (props) {
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
      <p
        className={`section__text ${show ? "show" : ""} ${
          props.fadeDirection === "right" ? props.fadeDirection : "left"
        }`}
      >
        I am a full-stack web developer with a passion for creating applications
        with engaging and intuitive user interfaces. I have a background in
        nursing, which has fostered my sense of resilience and problem-solving.
        Over time, my interest in programming grew and I decided to pivot into
        the software industry. I have experience working on small projects, both
        as an individual and with others. I hope to leverage my insight and
        skills to build impactful software.
        <br />
        <br />
        Aside from programming, I'm interested in filmmaking/photography and
        sports. I'm always learning about cinematography, video editing, and
        composition with the goal of producing my own content in the future.
        When it comes to sports, I'm a big NBA and NFL fan who enjoys learning
        about the strategic and analytic side of sports.
        <br />
        <br />
        To create this website, I used HTML5, CSS3, and React. I took the
        opportunity to learn about and implement various web-related features
        including CSS transitions, animations, the Intersection Observer API,
        and the scroll event. I also took the photos! 📸
      </p>
    </div>
  );
};

export default SectionText;
