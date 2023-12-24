import { useContext, useEffect } from "react";
import { sections } from "../../db";
import { ActiveLinkContext } from "./Context";
import { ThemeContext } from "../App";

const Header = () => {
   const { activeLink, setActiveLink } = useContext(ActiveLinkContext);
   const [ isDark ] = useContext(ThemeContext);

   // Change active link when scrolling
   useEffect(() => {
      // Get sections elements
      const sectionElems = document.querySelectorAll(".section");

      const setColor = () => {
         // Define a variable for the most ration to compare
         let mostPercentage = 0;

         // Function to update section that has the most ratio
         const observer = new IntersectionObserver(entries => {
            entries.forEach((sectionDetails, index) => {
               if (sectionDetails.intersectionRatio >= mostPercentage) {
                  mostPercentage = sectionDetails.intersectionRatio;
                  setActiveLink(index + 1);
               }  
            })
         })

         // Observing sections
         sectionElems.forEach(sectionElem => {
            observer.observe(sectionElem);
         });
      }

      window.addEventListener("scroll", setColor);

      return () => {
         window.removeEventListener("scroll", setColor);
      }
   }, [])

   return (
      <header>
         <div className="flex items-center bg-slate-900 dark:bg-slate-100 dark: px-3 sm:px-4 sm:pt-3 fixed z-10 bottom-4 left-1/2 -translate-x-1/2 rounded-2xl cursor-pointer">
            <div 
               className="header-scroller" 
               style={{left: `${window.innerWidth >= 640 ? (activeLink - 1) * 90 + 16 : (activeLink - 1) * 70 + 12}px` }}
            > 
            </div>
            {
               sections.map(section =>
                  <a
                     href={section.href}
                     className={`header-link${activeLink === section.id ? ' header-link--active' : ''}`}
                     style={{"--color": section.color}}
                     key={section.name}
                  >
                     <img src={isDark ? section.icon_dark : section.icon_light} className="w-7 sm:w-8 cursor-pointer" />
                     {
                        activeLink === section.id && <span className="cursor-pointer">{section.name}</span>
                     }
                  </a>
               )
            }
         </div>
      </header>
   )
}

export default Header;