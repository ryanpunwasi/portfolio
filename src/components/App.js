import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import SectionText from "./SectionText";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
import Skills from "./Skills";
import ScrollAnimation from "./ScrollAnimation";
import ContactSection from "./ContactSection";
import "./App.css";

const sections = [
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
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
        <SectionText></SectionText>
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      {/* <Section image="/img/02.jpeg" id="sunsetImage" blendMode="normal" /> */}
      <Section>
        <ScrollAnimation image="/img/02.jpeg" id="sunsetImage2" />
      </Section>
      <Section id="projects" />
      <Section id="contact">
        <ContactSection />
      </Section>
    </>
  );
}

export default App;
