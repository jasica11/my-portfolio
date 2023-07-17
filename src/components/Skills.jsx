import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import colab from "../assets/colab.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";


const Skills = () => {

  const techs=[
    {
      id:1,
      src:html,
      title:"HTML5",
      style: 'shadow-orange-500'
    },
   
    {
      id:2,
      src:css,
      title:"CSS3",
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src:js,
      title:"JavaScript",
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src:react,
      title:"React",
      style: 'shadow-cyan-600'
    },
    {
      id:5,
      src:tailwind,
      title:"Tailwind",
      style: 'shadow-sky-300'
    },
    {
      id:6,
      src:git,
      title:"GitHub",
      style: 'shadow-gray-500'
    },
    {
      id:7,
      src:colab,
      title:"Google Colab",
      style: 'shadow-orange-900'
    },
    {
      id:8,
      src:mysql,
      title:"My SQL",
      style: 'shadow-teal-900'
    },
   

  ]
  return (
    <div name="skills" className="w-full text-purple-950 md:h-screen mt-10">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-5">
          <p className="text-4xl font-bold inline border-b-4 border border-b-cyan-900 border-white dark:text-yellow-200 dark:border-teal-950 dark:border-b-cyan-900"> Skills </p>
        </div>


        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {
          techs.map(({id,src, title,style})=>(
            
            <div 
            key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="/" className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
          </div>
          )
          )
    
        }

        </div>

      </div>

    </div>
  )
}

export default Skills