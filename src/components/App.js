import { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Nav from "./Nav";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Lead from "./Lead";
import "./App.css";

const sections = [
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Photography", link: "#photography" },
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
      <Section>
        <Lead />
      </Section>
    </>
  );
}

export default App;
