import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs';
import {Link} from "react-scroll";


const NavBar = ({darkMode, setDarkMode}) => { 


  const [nav, setNav] = useState(false)

  const links=[

    {
      id: 1,
      link:'about',
     },

 {
  id: 2,
  link:'projects',
 },
{
  id: 3,
 link:'skills',
},

{
  id: 4,
 link:'contact',
},
  ];

  return ( 

 <div className=" flex justify-between items-center w-full h-20 pr-10 pl-30  text-center fixed bg-cyan-900 dark:bg-cyan-900 text-white dark:text-white "> 

<div className="flex mr-2 gap-2">
    <div onClick={()=> setDarkMode(!darkMode)}>

      {
        darkMode ?  
       ( <BsSunFill className="cursor-pointer text-xl content-center hover:scale-105 duration-300 mr-2 ml-40 text-cyan-300" />)
       
     : 
 ( < BsFillMoonStarsFill className="cursor-pointer text-xl content-center hover:scale-105 duration-300 mr-2 ml-40 text-yellow-200" /> )
      }

  
       </div>

    <div onClick={()=> setNav(!nav)}className="cursor-pointer pr-4 z-10 text-white md:hidden ml-20">
      { nav? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    </div> 

     <ul className="hidden md:flex">

      {links.map(({link,id}) =>( 
        
        <li key={link.id} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-300 mr-9   bg-cyan-900 dark:bg-cyan-900 text-white dark:text-white">
          
          <Link to={link} smooth duration={600}>{link}</Link>
        
        </li>
      ))}
    

    </ul>




{nav && ( 

<ul className= "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-teal-950 to-cyan-900">

    {links.map(({link,id}) =>( 
        
        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-white hover:scale-105 duration-300">
           <Link to={link} smooth duration={600}>{link}</Link>
        </li>
      ))}


</ul>
  )}
    </div>


  )
}

export default NavBar