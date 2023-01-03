import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import SectionText from "./SectionText";
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
      <Section id="about">
        <SectionText fadeDirection="right"></SectionText>
      </Section>
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
