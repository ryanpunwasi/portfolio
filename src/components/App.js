import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import SectionText from "./SectionText";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
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
        <SectionText></SectionText>
      </Section>
      <Section id="projects" />
      <Section image="/img/02.jpeg" id="sunsetImage" blendMode="normal" />
      <Section id="contact">
        <ContactSection />
      </Section>
    </>
  );
}

export default App;
