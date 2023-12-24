import CopyBtn from "./CopyBtn";
import { socials } from "../../db";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
   const [ isDark ] = useContext(ThemeContext);

   return (
      <section className="section" id="contact">
         <div className="container">
         <div className="flex gap-x-10 min-h-screen py-10">
               {/* Lines */}
               <div className="hidden md:flex flex-col items-center gap-y-4">
                  <div className="w-5 h-5 bg-contact rotate-45 shrink-0 rounded-md"></div>
                  <div className="w-2 h-full bg-contact rounded-md shrink-0 top-line"></div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 shrink-0 text-contact/80 dark:text-contact/50">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>

                  <div className="w-2 h-full bg-gradient-to-b from-contact to-slate-100 dark:to-slate-900 rounded-md"></div>
                  <div className="w-5 h-5 bg-slate-100 dark:bg-slate-900 rotate-45 shrink-0 rounded-md"></div>
               </div>

               {/* Content */}
               <div className="w-full flex flex-col justify-center">
                  <h2 className="title flex gap-x-3 justify-center md:justify-start set-hover">
                     <span>
                        <span className="title-bold">Stay</span> with Me
                     </span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-down">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                     </svg>
                  </h2>

                  <div className="separating-line bg-contact md:bg-transparent from-slate-100 dark:from-slate-900 to-contact dark:to-contact"></div>

                  {/* Social Media */}
                  <div className="flex gap-5 lg:gap-10 justify-center md:justify-start flex-wrap">
                     {
                        socials.map(social => (
                           <div 
                              key={social.id}
                              className="w-60 md:w-80 lg:w-96 bg-transparent border-2 border-slate-900 dark:border-slate-100 rounded-lg py-1 md:py-3 relative"
                           >
                              <a href={social.link} target="_blank" className="flex flex-col gap-y-1 items-center">
                                 <img src={isDark ? social.image_dark : social.image_light} className="w-16 md:w-20 lg:w-26 cursor-pointer" />
                                 <span className="text-lg lg:text-xl text-slate-900 dark:text-slate-50 cursor-pointer">{social.text}</span>
                              </a>
      
                              <CopyBtn text={social.text} />
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact;