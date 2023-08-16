import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  
  const [mobileMenu,setMenu]=useState(true);
  
  const menuHandler=()=>{
    setMenu(!mobileMenu);
  }

  return (
    <div className='flex justify-between items-center w-full  h-24 text-white mx-auto px-4 py-4 z-10'>
      <h1 className='font-bold text-4xl italic'>
      LEVEL-UP
      </h1>
      <ul className='hidden md:flex text-2xl'>
       <li className='px-4'><a href="#venue" className='hover:text-gray-400'>Venue</a></li>
        <li className='px-4 '><a href="#arena"className='hover:text-gray-400'>Arena</a></li>
        <li className='px-4 '><a href="#events"className='hover:text-gray-400'>Events</a></li>
        <li className='px-4 '><a href="#venue" className='font-bold text-[#ffd60a] p-2 rounded-md hover:bg-black'>Schedule Event</a></li>
      </ul>
      <div className=' md:hidden text-4xl hover:cursor-pointer' onClick={menuHandler}>
        {mobileMenu ? <AiOutlineMenu/>: <AiOutlineClose/>}
      </div>
     
     <div className={!mobileMenu ? "fixed left-0 top-0 w-[80%] cover z-50" : "hidden"}>
      <div className='bg-black py-10' onClick={menuHandler}>
      <ul className=' text-2xl space-y-4'>
       <li className='px-4 border-b border-gray-600'><a href="#venue" className='hover:text-gray-400'>Venue</a></li>
        <li className='px-4 border-b border-gray-600'><a href="#arena"className='hover:text-gray-400'>Arena</a></li>
        <li className='px-4 border-b border-gray-600'><a href="#events"className='hover:text-gray-400'>Events</a></li>
        <li className='px-4 border-b border-gray-600'><a href="#venue" className='font-bold text-[#ffd60a] rounded-md hover:bg-black'>Schedule Event</a></li>
      </ul>
      </div>
     </div>

    </div>
  )
}

export default Navbar
