import React from 'react'

const Venue = () => {
  return (
    <div id='venue' className='w-full bg-black mx-auto'>
      <div className=' max-w-[1240px] w-full grid md:grid-cols-2 p-2 mx-auto'>
        <div>
            <img src="https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg" alt="" className='rounded px-5' />
        </div>
        <div className='px-5 py-10 text-white rounded-r-lg '>
            <h2 className='font-bold  text-3xl md:text-4xl italic'>Our Venue</h2>
            <p className='text-2xl md:text-3xl'>The LEVEL-UP arena has state of the art PC gaming rigs equipped with the most recent GPU's and CPU's. Stations contain premium bluetooth headsets accompanied by optical gaming keyboards and ultralight mice.</p>
            
        </div>
      </div>
    </div>
  )
}

export default Venue
