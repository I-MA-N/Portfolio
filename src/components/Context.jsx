import { createContext, useEffect, useState } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

// Provider used for access activeLink in every component
const ActiveLinkContext = createContext(1);

const Context = () => {
    const [activeLink, setActiveLink] = useState(1);

    // Add event listener for window to set height of top lines in each section
    useEffect(() => {
       const setHeight = () => {
          const separatingLines = document.querySelectorAll('.separating-line');
          const topLines = document.querySelectorAll('.top-line');
       
          separatingLines.forEach((separatingLine, index) => {
             topLines[index].style.height = separatingLine.offsetTop - 112 + 'px';
          })
       }
 
       window.addEventListener('load', setHeight);
 
       return () => {
          window.removeEventListener('load', setHeight);
       }
    }, [])

    return (
        <ActiveLinkContext.Provider value={{activeLink, setActiveLink}}>
            <Cursor />
            <Header />
        </ActiveLinkContext.Provider>
    )
}

export default Context;
export { ActiveLinkContext };