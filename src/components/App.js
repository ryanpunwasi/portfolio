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
          My fascination with software began while I was in university. I was
          intrigued by how code could be used to build elaborate products like
          social media platforms, video games, and operating systems. I began
          learning how to program websites in my spare time using any resources
          I could find. In 2022, I knew I wanted to pursue a career in the
          software industry so I enrolled in a coding bootcamp. I had the
          opportunity to pick up valuable skills like full-stack web
          development, version control, object-oriented programming, database
          design, and software testing. I've worked extensively with Javascript
          building user interfaces and REST APIs. I'm looking to secure a role
          where I can grow as a developer and put my skills to the test.
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
          I'm a big sports fan (NBA 🏀 and NFL 🏈). What interests me most about
          sports is the team dynamic, strategy and analytics that goes into
          being a contender in very competitive leagues. When I'm not busy, I'm
          usually watching the game, looking at metrics, or listening my
          favourite sports analytics podcasts.
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
