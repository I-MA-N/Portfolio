import { useEffect, useState } from 'react';
import { projects } from '../../db';

const Projects = () => {
   const [modalDetails, setModalDetails] = useState([
      false,
      {
         name:"",
         link: "",
         image: "",
         description: ""
      }
   ]);

   useEffect(() => {
      if (modalDetails[0]) {
         const modalHeading = document.querySelector('.modal-heading');
         modalHeading.insertAdjacentHTML('afterend', `
         <p>${modalDetails[1].description}</p>
         `);
         return () => {
            modalHeading.nextElementSibling.remove();
         }
      }
   }, [modalDetails])

   return (
      <section className="section" id="projects">
         {/* Main Content */}
         <div className="container">
            <div className="flex gap-x-10 min-h-screen py-10">
               {/* Lines */}
               <div className="hidden md:flex flex-col items-center gap-y-4">
                  <div className="w-5 h-5 bg-projects rotate-45 shrink-0 rounded-md"></div>
                  <div className="w-2 h-full bg-projects rounded-md shrink-0 top-line"></div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 shrink-0 text-projects/80 dark:text-projects/50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>

                  <div className="w-2 h-full bg-gradient-to-b from-projects to-contact rounded-md"></div>
                  <div className="w-5 h-5 bg-contact rotate-45 shrink-0 rounded-md"></div>
               </div>

               {/* Content */}
               <div className="w-full flex flex-col justify-center">
                  <h2 className="title set-hover">Work samples, <span className="title-bold">represent</span> capability :D</h2>

                  <div className="separating-line bg-projects md:bg-transparent from-projects/5 to-projects"></div>

                  {/* Projects */}
                  <div className="flex justify-center md:justify-between items-center gap-6 lg:gap-10 gap-y-16 flex-wrap">
                     {
                        projects.map(project => (
                           <div className="w-full lg:w-[47%] grow-0 relative group" key={project.id}>
                              {/* Image */}
                              <div className="border-2 border-slate-900 dark:border-slate-100 rounded-xl group-hover:border-transparent transition-all pointer-events-none sm:pointer-events-auto">
                                 <img 
                                    src={project.image} 
                                    className="w-full xl:scale-95 sm:blur-[2px] group-hover:scale-100 group-hover:blur-0 rounded-xl transition-transform cursor-pointer"
                                    onClick={() => setModalDetails([
                                       true,
                                       {
                                          name: project.name,
                                          link: project.link,
                                          image: project.image,
                                          description: project.description
                                       }
                                    ])}
                                 />
                              </div>
                              {
                                 project.isHot &&
                                 <div className="bg-slate-100 p-1 text-orange-400 rounded-full absolute top-3 left-3 cursor-pointer">
                                    <img src="./icons/fire.gif" className="block group-hover:block w-6 sm:w-[30px] rounded-full cursor-pointer" />
                                 </div>
                              }

                              {/* Text & Btn */}
                              <div className="w-full flex justify-between items-center mt-4 text-lg sm:text-xl">
                                 <button
                                    className="projects-text"
                                    onClick={() => setModalDetails([
                                       true,
                                       {
                                          name: project.name,
                                          link: project.link,
                                          image: project.image,
                                          description: project.description
                                       }
                                    ])}
                                 >
                                    {project.name}
                                 </button>
                                 <a
                                    target="_blank"
                                    href={project.link}
                                    className="projects-link"
                                 >
                                    Visit
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>

         {/* Prev Webstie Modal */}
         {
            modalDetails[0] && 
            <>
               {/* Overlay */}
               <div 
                  className="fixed w-full h-full top-0 left-0 bg-black/40 z-[5]"
                  onClick={() => setModalDetails([
                     false,
                     {
                        name:"",
                        link: "",
                        image: "",
                        description: ""    
                     }
                  ])}  
               />

               {/* Close Modal Btn */}
               <button 
                  className="fixed top-4 right-4 text-black backdrop-blur brightness-125 bg-slate-900/80 dark:bg-slate-100/80 p-1 rounded-full z-[7] cursor-pointer"
                  onClick={() => setModalDetails([
                     false,
                     {
                        name:"",
                        link: "",
                        image: "",
                        description: "" 
                     }
                  ])}   
               >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-10 lg:h-10 text-slate-100 dark:text-slate-900 cursor-pointer">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>

               {/* Main Modal */}
               <div className="w-4/5 lg:w-2/3 xl:w-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] xl:-translate-y-1/2 z-10">
                  <img 
                     src={modalDetails[1].image}
                     className="w-full"
                  />
                  <div className="flex justify-between items-center gap-x-3 lg:gap-x-5 py-6 px-4 lg:px-8 brightness-125 text-slate-100 dark:text-slate-900 bg-slate-900/70 dark:bg-slate-100/70">
                     <div>
                        <h5 className="text-xl modal-heading">{modalDetails[1].name}</h5>
                     </div>
                     <a 
                        target="_blank"
                        href={modalDetails[1].link}
                        className={`flex gap-x-2 items-center px-4 py-1 border rounded-md
                        border-slate-100 dark:border-slate-900 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900
                        hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer`}
                     >
                        Visit
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                     </a>
                  </div>
               </div>
            </>
         }
      </section>
   )
}

export default Projects;