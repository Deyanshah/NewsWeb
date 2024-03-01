import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { BiSolidNews } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";

const Navbar = ({setCategory}) => {
  return (
    <nav className="bg-red-500 p-4 flex justify-between items-center shadow-xl rounded-b-lg">
      <div className="flex items-center">
        <ImNewspaper size={40} color='white'/>
        <h1 className="text-white text-3xl font-semibold ml-2 mr-6 cursor-pointer" onClick={()=>setCategory("general")}> Pineco News</h1>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input type="text" placeholder="Search..." className="bg-white border w-96 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          <button className="absolute right-0 top-0 mt-3 mr-4" onClick={() => console.log('Search clicked')}>
            <IoIosSearch size={20} />
          </button>
        </div>
        <div className="ml-4">
          <a href="#news" className="text-white hover:text-black">News</a>
        </div>
      </div>
      <ul className="flex space-x-4 text-white">
        <li><a href="#about"  className='hover:text-black' onClick={()=>setCategory("general")}>General</a></li>
        <li><a href="#home" className='hover:text-black' onClick={()=>setCategory("business")}>Entreprenuership</a></li>
        <li><a href="#contact" className='hover:text-black' onClick={()=>setCategory("technology")}>Technology</a></li>
        <li><a href="#contact" className='hover:text-black' onClick={()=>setCategory("science")}>Science</a></li>
        <li><a href="#contact" className='hover:text-black' onClick={()=>setCategory("entertainment")}>Entertainment</a></li>
        <li><a href="#contact" className='hover:text-black' onClick={()=>setCategory("sports")}>Sports</a></li>
        <li><a href="#contact" className='hover:text-black' onClick={()=>setCategory("health")}>health</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
