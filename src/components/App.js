import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import SectionText from "./SectionText";
import ScrollTextSection from "./ScrollTextSection";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
import ScrollAnimation from "./ScrollAnimation";
import Project from "./Project";
import Credits from "./Credits";
import ContactSection from "./ContactSection";
import "./App.css";

const sections = [
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

const projects = [
  {
    id: 0,
    name: "Valentnost",
    desc: "A single-page web application that helps in the memorization of the names and symbols of the elements of the periodic table",
    text: "This project was born out of my desire to acquire the obscure skill of being able to match the names and symbols of all the elements of the periodic table. Hopefully high-school students and chemistry enthusiasts can find it useful though! To get this project done, I read up on colour theory, strengthened my understanding of positioning and layout with CSS flexbox and grid, and adhered to test-driven development by writing and using unit tests throughout the development process.",
    repo: "https://github.com/ryanpunwasi/valentnost",
    liveSite: "https://valentnost.app",
    icon: "science.svg",
    stack: ["HTML", "CSS", "React", "Redux", "Jest"],
  },
  {
    id: 1,
    name: "Semitone API",
    desc: "A REST API that serves audio for musical notes in five different octaves",
    text: "While working on Semitone, I spent a lot of time looking for an simple way to retrieve audio files of musical notes. Unable to find an adequate solution, I decided to create this simple API. I created a schema for musical notes, designed and seeded the database and wrote the endpoints using Express. The homepage was created using EJS templating and Tailwind for styling.",
    repo: "https://github.com/ryanpunwasi/semitone-api",
    liveSite: "https://semitone-api.fly.dev",
    icon: "saxophone.svg",
    stack: ["HTML5", "TailwindCSS", "Express", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Semitone",
    desc: "A single-page web application where users can practice identifying notes, octaves, chords, and scales by sound",
    text: "I built Semitone with the goal of helping musicians develop their ability to correctly identify pitch. To create this project, I learned about the fundamentals of state management with Redux and how audio is used in the browser. I implemented the layout primarily with Bootstrap, using custom CSS to add my own visual style.",
    repo: "https://github.com/ryanpunwasi/semitone",
    liveSite: "https://semitone.io",
    icon: "piano-2.svg",
    stack: ["HTML5", "CSS3", "Bootstrap 5", "React", "Redux"],
  },

  {
    id: 3,
    name: "BayStreetBets",
    desc: "A full-stack web app where users can create and participate in simulated stock trading competitions",
    text: "BayStreetBets was made with two other collaborators for a final project at Lighthouse Lab's Web Development Bootcamp. I was able to implement authentication and resource authorization with JSON Web Tokens; work on form validation; and implement the functionality to create, delete, leave, and join stock-trading competitions.",
    repo: "https://github.com/ryanpunwasi/BayStreetBets",
    liveSite: null,
    icon: "investment.svg",
    stack: [
      "HTML5",
      "CSS3",
      "Sass",
      "Express",
      "React",
      "NodeJS",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    name: "Pinnet",
    desc: "A full-stack web app where users can create and share maps with pinned locations",
    repo: "https://github.com/ryanpunwasi/pinnet",
    text: "Pinnet was made with two other collaborators for a mid-term project at Lighthouse Lab's Web Development Bootcamp. I did work on both the front-end and back-end, implementing features like authentication and the ability to browse, create and favourite maps. I had the chance to write complex SQL queries, create interactive maps with Leaflet, work with promises, and write endpoints with Express.",
    liveSite: null,
    icon: "pin.svg",
    stack: [
      "HTML5",
      "Sass",
      "Bootstrap",
      "jQuery",
      "Express",
      "NodeJS",
      "EJS",
      "PostgreSQL",
    ],
  },
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
          design, and software testing. I've worked extensively with Javascript,
          building user interfaces and REST APIs. I'm looking to secure a role
          where I can grow as a developer and put my skills to the test.
        </SectionText>
        <SectionText
          fadeDirection="right"
          image="photo-camera.svg"
          title="Filmmaking"
        >
          As a medium, film is as powerful as it is complex. It is incredibly
          collaborative, making use of visuals, sound, acting, effects, editing,
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

      <ScrollTextSection>
        <h2 className="portfolio-header">Projects</h2>
        <Project project={projects[0]} fadeDirection="left" />
        <Project project={projects[1]} fadeDirection="right" />
        <Project project={projects[2]} fadeDirection="left" />
        <Project project={projects[3]} fadeDirection="right" />
        <Project project={projects[4]} fadeDirection="left" />
      </ScrollTextSection>

      <Section id="contact">
        <ContactSection />
      </Section>
      {false && (
        <Section>
          <Credits />
        </Section>
      )}
    </>
  );
}

export default App;
