
import React from 'react';
import {AiFillGithub, AiFillMail, AiFillLinkedin} from 'react-icons/ai';

const Contact = () => {
  return (
   <div name="contact" className="w-full text-purple-950 md:h-screen">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border border-b-cyan-900 border-white justify-self-center dark:text-yellow-200 dark:border-teal-950 dark:border-b-cyan-900">        
           Contact </p>
        </div>
        
        <div className="text-5xl flex justify-center gap-12 py-3 mr-60 ml-20">
              <a href="https://github.com/jasica11" target= "_blank" rel="noreferrer noopener" className='hover:scale-105 duration-300 text-gray-500'><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/humaira-mostafa-jasica-178a59195/" target= "_blank" className='hover:scale-105 duration-300 text-blue-700'  rel="noreferrer noopener"><AiFillLinkedin/></a>
              <a href="mailto:jasicah11@gmail.com" target= "_blank"  rel="noreferrer noopener"className='hover:scale-105 duration-300 text-cyan-600' ><AiFillMail/></a>
              </div>
              </div>

    
   </div>
  )
}

export default Contact