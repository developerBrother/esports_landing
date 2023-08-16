import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black p-10 mx-auto border-t-4 text-white grid md:grid-cols-2 my-auto self-center">
      <div>
        <h1 className="font-bold text-4xl italic text-center">LEVEL-UP</h1>
      </div>
      <div className="my-auto mx-auto">
        <ul className="text space-y-4 md:space-y-0 pt-5 md:pt-0 md:flex">
          <li className="px-4">
            <a href="#venue" className="hover:text-gray-400">
              Venue
            </a>
          </li>
          <li className="px-4 ">
            <a href="#arena" className="hover:text-gray-400">
              Arena
            </a>
          </li>
          <li className="px-4 ">
            <a href="#events" className="hover:text-gray-400">
              Events
            </a>
          </li>
          <li className="px-4 ">
            <a
              href="#venue"
              className="font-bold text-[#ffd60a] rounded-md hover:bg-black hover:text-white"
            >
            Schedule Event
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
