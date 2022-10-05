import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
  return (
    <>
      <Nav isOpen={sidebarOpen} toggle={toggleSidebar} />
      <Sidebar items={sections} isOpen={sidebarOpen} />
      <Section>
        <Lead />
      </Section>
    </>
  );
}

export default App;
