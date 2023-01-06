import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import SectionText from "./SectionText";
import ScrollTextSection from "./ScrollTextSection";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
import ScrollAnimation from "./ScrollAnimation";
import Projects from "./Projects";
import ContactSection from "./ContactSection";
import "./App.css";

const sections = [
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
        <Nav />
        <Sidebar items={sections} />
      </SidebarContext.Provider>
      <Section image="/img/03.jpg">
        <Lead />
      </Section>
      <ScrollTextSection id="about">
        <SectionText fadeDirection="right" image="pen.svg" title="TL;DR">
          I am a full-stack web developer with a passion for creating
          easy-to-use applications with engaging user interfaces. I hold a
          Bachelor's of Science in Nursing from Toronto Metropolitan University
          and a Diploma of Web Development from Lighthouse Labs. I'm an avid
          learner, leveraging my curiosity and enthusiasm to gain as much
          knowledge as I can about software development, film, and sports.
        </SectionText>
        <SectionText
          fadeDirection="left"
          image="monitor.svg"
          title="Software Development"
        >
          Aside from programming, I'm interested in filmmaking/photography and
          sports. I'm always learning about cinematography, video editing, and
          composition with the goal of producing my own content in the future.
          When it comes to sports, I'm a big NBA and NFL fan who enjoys learning
          about the strategic and analytic side of sports.
        </SectionText>
        <SectionText
          fadeDirection="right"
          image="photo-camera.svg"
          title="Filmmaking"
        >
          As a medium, film is as powerful as it is complex. It is incredibly
          collaborative, making use of visuals, sound, acting, effects, edting,
          sets and costumes. It gives viewers insight into the perspectives and
          experiences of others. For these reasons, I am a lover of film and I
          like to spend my spare time learning about the fundamentals of film
          production&mdash;specifically cinematography, video editing, and
          screenwriting. I use books, as well as online videos and courses to
          learn about different camera shots, video editing techniques and
          story-telling concepts.
        </SectionText>
        <SectionText
          fadeDirection="left"
          image="basketball-jersey.svg"
          title="Sports"
        >
          When it comes to sports, I'm a big NBA and NFL fan who enjoys learning
          about the strategic and analytic side of sports.
        </SectionText>
      </ScrollTextSection>
      <Section>
        <ScrollAnimation image="/img/02.jpeg" id="sunsetImage2" />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </>
  );
}

export default App;
