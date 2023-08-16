import React from 'react'

const Events = () => {
  return (
    <div id='events' className='w-full text-white bg-gradient-to-t from-[#003566] to-black'>
      <div className='max-w-[1240px] w-full mx-auto grid md:grid-cols-3 gap-10 py-10 px-5 '>
        <div className='text-3xl'>
            <h2 className='font-bold'>Registered Events</h2>
            <ul className='list-disc pl-10'>
                <li>Rocket League Tournament</li>
                <li>Halo Tournament</li>
                <li>PUBG Tournament</li>
            </ul>
        </div>
        <div className='text-3xl'>
            <h2 className='font-bold'>Future Events</h2>
            <ul className='list-disc pl-10'>
                <li>Fortnite Tournament</li>
                <li>TBA</li>
                <li>TBA</li>
            </ul>
        </div>
        <div className='text-3xl text-center'>
            <h2 className='font-bold'>Want to have an event?</h2>
            <p>Schedule your event today</p>
            <button className="bg-[#ffd60a] rounded-md p-3 mt-5 text-black text-2xl md:text-3xl hover:bg-[#ffc300] font-bold">Schedule an Event</button>

        </div>
      </div>
    </div>
  )
}

export default Events
