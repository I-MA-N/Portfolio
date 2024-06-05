import { useContext, useEffect, useRef } from "react";
import Logo_light from "../assets/logos/logo_light.png";
import Logo_dark from "../assets/logos/logo_dark.png";
import { ThemeContext } from "../App";

function timeNow() {
   let d = new Date(),
      h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
      m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(),
      s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
   return h + ':' + m + ':' + s;
}

const Intro = () => {
   const [isDark] = useContext(ThemeContext);
   const timeRef = useRef(null);

   useEffect(() => {
      const interval = setInterval(() => {
         timeRef.current.innerText = timeNow();
      }, 1000);

      return () => clearInterval(interval);
   }, [])


   return (
      <section className="section" id="intro">
         <div className="container">
            <div className="flex gap-x-10 min-h-screen py-10">
               {/* Lines */}
               <div className="hidden md:flex flex-col items-center gap-y-4">
                  <div className="w-5 h-5 bg-intro rotate-45 shrink-0 rounded-md"></div>
                  <div className="w-2 bg-intro rounded-md shrink-0 top-line"></div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 shrink-0 text-intro/80 dark:text-intro/50">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                  <div className="w-2 h-full bg-gradient-to-b from-intro to-skills rounded-md"></div>
                  <div className="w-5 h-5 bg-skills rotate-45 shrink-0 rounded-md"></div>
               </div>

               {/* Content */}
               <div className="w-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
                     {/* Title */}
                     <h1 className="title set-hover">
                        Hi, I'm <span className="title-bold">Iman </span>
                        <span className="text-[26px] lg:text-[42px]">a </span>
                        <span className="title-bold">Front End </span>
                        Developer
                     </h1>
                     {/* Logo */}
                     <div className="w-fit bg-slate-900 dark:bg-slate-100 hover:bg-slate-900/80 dark:hover:bg-slate-100/80 rounded-lg p-4 cursor-pointer transition-colors">
                        <img src={isDark ? Logo_light : Logo_dark} className="w-32 lg:w-40 cursor-pointer" />
                     </div>
                  </div>

                  <div className="separating-line"></div>

                  {/* Description */}
                  <p className="max-w-[800px] text-xl lg:text-3xl leading-[40px] lg:leading-[60px] -tracking-tight lg:-tracking-tight text-slate-900 dark:text-slate-100 text-center md:text-start">
                     Learn, practice,
                     <span className="relative pl-2 text-xmark">
                        code
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-base lg:text-2xl text-slate-900 dark:text-slate-100">programming</span>
                     </span>
                     . Like to gain experience & improve abilities. Dealing with
                     <span className="relative px-2">
                        challenges
                        <span className="absolute top-[110%] lg:top-[90%] left-1/2 -translate-x-1/2 text-sm text-slate-900 dark:text-slate-100">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-6 h-4 lg:h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                           </svg>
                        </span>
                     </span>
                     & solving problems. Up to
                     <span className="relative pl-2">
                        date
                        <span
                           ref={timeRef}
                           className="absolute top-[90%] left-[58%] -translate-x-1/2 text-sm lg:text-lg text-slate-900 dark:text-slate-100"
                        >
                           {
                              timeNow() ? timeNow() : '00:00:00'
                           }
                        </span>
                     </span>
                     , try to use new tools... <br />
                  </p>

                  <p className="text-center md:text-start text-base lg:text-xl text-slate-900 dark:text-slate-100 mt-8">S.Mohammad Iman Mostafavi Nezhad, 17 years old from Isfahan :)</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Intro;