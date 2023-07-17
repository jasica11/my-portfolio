import About from "./components/About";
import Contact from "./components/Contact";

import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode]= useState(true);
  return (
    <div className={darkMode && "dark"}>
     
   <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

   <main className="bg-white dark:bg-teal-950 text-purple-950 dark:text-white" >
      <About />
      <Projects/>
      < Skills />
      <Contact />
      </main> 
     
    </div>
  );

}
export default App;
