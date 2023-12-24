import { skills } from "../../db";

const Skills = () => {
   return (
      <section className="section" id="skills">
         <div className="container">
            <div className="flex gap-x-10 min-h-screen py-10">
               {/* Lines */}
               <div className="hidden md:flex flex-col items-center gap-y-4">
                  <div className="w-5 h-5 bg-skills rotate-45 shrink-0 rounded-md"></div>
                  <div className="w-2 h-full bg-skills rounded-md shrink-0 top-line"></div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 shrink-0 text-skills/80 dark:text-skills/50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>

                  <div className="w-2 h-full bg-gradient-to-b from-skills to-projects rounded-md"></div>
                  <div className="w-5 h-5 bg-projects rotate-45 shrink-0 rounded-md"></div>
               </div>

               {/* Content */}
               <div className="w-full flex flex-col justify-center">
                  {/* Title */}
                  <h2 className="title set-hover">working <span className="title-bold">With</span> :</h2>

                  <div className="separating-line bg-skills md:bg-transparent from-skills/5 to-skills"></div>

                  {/* Circles */}
                  <div className="flex justify-around md:justify-start items-center gap-4 lg:gap-8 flex-wrap">
                        {
                           skills.map(skill => (
                              <div key={skill.id} className="w-26 h-26 lg:w-32 lg:h-32 flex items-center justify-center bg-slate-900 dark:bg-slate-100 rounded-full relative group">
                                 {/* Image */}
                                 <img src={skill.src} style={{width: skill.size}} />

                                 {/* Overlay */}
                                 <div 
                                    className="hidden flex-col justify-center items-center gap-y-2 w-full h-full rounded-full group-hover:flex bg-black/80 absolute transition-all"
                                 >
                                    <span className="text-base lg:text-lg text-slate-100 font-bold">{skill.name}</span>
                                    {/* Stars */}
                                    <div className="flex">
                                       {
                                          new Array(skill.stars).fill(0).map((star, index) => (
                                             <svg xmlns="http://www.w3.org/2000/svg" key={index} fill="#F4CE14" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 lg:w-5 lg:h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                             </svg>
                                          ))
                                       }
                                    </div>
                                 </div>
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

export default Skills;