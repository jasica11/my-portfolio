import React from 'react';
import {LuDownload} from "react-icons/lu";
import hero from "../assets/hero.jpg"

const About = () => {
  return (
    <div name="about" className="h-screen w-full">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

            <div className="flex flex-col justify-center h-full mt-20">

            <h2 className="text-4xl sm:text-7xl mt-10 font-bold ml-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-950 to-purple-950 dark:text-yellow-200">
                Web Developer
            </h2>
            <p className="font-semibold py-4 max-w-md text-teal-950 mt-5 ml-5 mr-3 font-signature dark:text-white">Hi!<span className="animate-pulse text-4xl">👋</span> I'm <h1 className="text-3xl font-signature">Humaira Mostafa Jasica,</h1> a Web Developer from Bangladesh. My web development journey started quite a few months ago. I'm currently specializing on front-end development. After completing my BSc, I'm now looking forward to pursuing my software development journey to sharpen my expertise and adopt ever changing technologies.

            </p>
            <div>
              


              <a href="/resume.pdf" target= "_blank" rel="noreferrer" download className='hover:scale-105 duration-300' >
              <button className="group text-white font-bold w-fill px-6 py-3 ml-6 mt-5 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
               Resume 

               <span className="duration-300 ml-1">
               <LuDownload />
               </span>
              </button>
               </a>
             </div>

            </div>

            <div>
                <img src={hero} alt="profile" className="rounded-full mx-auto w-2/3 md:w-full"/>
            </div>
          
        </div>
       
    </div>
  )
}

export default About