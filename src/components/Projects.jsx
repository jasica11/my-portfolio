import React from 'react'
import mapty from "../assets/mapty.png"
import youtube from "../assets/youtube.jpg"
import portfolio from "../assets/portfolio.jpg";
 
import {BsArrowUpRightSquare, BsGithub} from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

const Projects = () =>{


  const codes=[

    {
      id:1,
      src:mapty,
      live:"https://mapty11.netlify.app/",
      link:"https://github.com/jasica11/Mapty",
      tag:"A website to track workouts details using Gelolocation API, HTML, CSS and JavaScript"
        
    },
    {
      id:2,
      src:youtube,
      live:"https://youtube-clone-jasica11.netlify.app/",
      link:"https://github.com/jasica11/youtube_2.0",
      tag:"A video streaming responsive app using React, Mui Library, Fetch API"
    },
    {
      id:3,
      src:portfolio,
      live: "https://jasica-portfolio.netlify.app/",
      link:"https://github.com/jasica11/my-portfolio",
      tag: "This is the current page which is created with React and Tailwind CSS ",
    }
  ]
  
  return (
    <div name="projects" className="w-full text-purple-950 md:h-screen">
     
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-10">
      <div className="pb-8 mt-5">

      <p className="text-4xl font-bold inline border-b-4 border border-b-cyan-900 border-white dark:text-yellow-200 dark:border-teal-950 dark:border-b-cyan-900">Projects</p>

      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

      {
        codes.map(({id, src, link, live,tag})=>( 

      <div key={id}  className="shadow-md shadow-gray-600 rounded-lg dark:text-white">
        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
        <div className="flex items-center justify-center">
          <a href={live} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl"><BsArrowUpRightSquare/></a>
          <a href ={link} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl "> <BsGithub/> </a>
        </div>

        <div className="flex justify-center gap-2">

        <div className="mt-1"> 
           <CiMenuKebab/>
           
        </div>

        <div className= "mb-2 pr-2 font-bold text-blue-950 dark:text-white"><h1>{tag}</h1>
         </div>
        </div>
         </div>
        

        ))
      }

     </div>  
     </div>
    </div>
  )
    }
export default Projects