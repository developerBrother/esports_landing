import React from "react";

const Arena = () => {
  return (
    <div id="arena" className="w-full  mx-auto  bg-black text-white">
      <div className="max-w-[1240px] w-full grid  grid-cols-1 md:grid-cols-2 mx-auto pt-10 pb-10">
        <div className="px-5 my-auto">
          <h2 className="font-bold text-3xl md:text-4xl italic">Arena</h2>
          <p className="text-2xl md:text-3xl">
            Level-Up arena has 
            <span className="text-[#ffd60a] font-bold rounded"> 10,000</span> person capacity, with all the
            accomodations you would ever need. The venue has food kiosks,
            merchandise vendor areas, restrooms, and premium advertising space
            on the surrounding screens. It's the perfect place for your e-sports
            tournament.
          </p>
        </div>
        <div>
            <img src="https://images.adsttc.com/media/images/5ef1/68f8/b357/6529/f500/0347/large_jpg/yc8m6r-A_jpeg.jpg?1592879340" alt="" className="px-5 py-10 my-auto rounded"/>
        </div>
      </div>
    </div>
  );
};

export default Arena;
