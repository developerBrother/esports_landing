import React from "react";
import Arena from "../assets/esports_arena.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center flex flex-col justify-center text-3xl md:text-5xl leading-loose mx-auto font-bold text-white   drop-shadow-lg bg-gradient-to-b from-[#003566] to-black">
      
       <div className=" mx-auto mt-[-100px] place-content-between">
        <span className="italic text-[#ffd60a]"> LEVEL-UP </span> <span> Arena is</span>
        
        <p className="text-[#ffc300] drop-shadow-2xl ">YOUR</p>

        <p>Home for all E-Sports</p>

      <button className="bg-[#ffd60a] rounded-md p-3 mt-5 text-black text-2xl md:text-3xl hover:bg-[#ffc300]">Schedule an Event</button>
    
        
      </div>
    </div>
  );
};

export default Hero;
