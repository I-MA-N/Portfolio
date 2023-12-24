import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Context from "./components/Context";
import Particle from "./components/Particle";
import ThemeBtn from "./components/ThemeBtn";
import { createContext, useState } from "react";

const ThemeContext = createContext(true);

const App = () => {
   const [isDark, setIsDark] = useState(true)

   return (
      <ThemeContext.Provider value={[isDark, setIsDark]}>
         <Particle />
         <ThemeBtn />
         <Context />
         <Intro />
         <Skills />
         <Projects />
         <Contact />
      </ThemeContext.Provider>
   )
}

export default App;
export { ThemeContext };