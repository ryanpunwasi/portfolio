import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
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
      <Section image="/img/02.jpeg" id="about" />
      <Section image="/img/03.jpg" id="skills" />
      <Section image="/img/02.jpeg" id="projects" />
      <Section image="/img/03.jpg" id="contact" />
    </>
  );
}

export default App;
