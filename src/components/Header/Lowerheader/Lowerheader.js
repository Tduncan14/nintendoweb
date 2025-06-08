import React from 'react'
import './Lowerheader.css'

const Lowerheader = () => {
  return (
    <div className="lowerHead">
      <nav className=" lowerGrid flex justify-around text-sm font-medium text-gray-700">
        <a href="#features" className="hover:text-blue-500">My Nintendo Store</a>
        <a href="#pricing" className="hover:text-blue-500">Games</a>
        <a href="#about" className="hover:text-blue-500">Nintendo Switch</a>
        <a href="#contact" className="hover:text-blue-500">New & Events</a>
        <a href="#contact" className="hover:text-blue-500">Play Nintendo</a>
      </nav>

      <div class="secondLower">
        <div class="secondLnav">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-truck"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783 .378l.074 .108l3 5l.055 .103l.04 .107l.029 .109l.016 .11l.003 .085v6a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2zm-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m.434 -9h-3.434v3h5.234z" /></svg>

          <p> <span class="firstSpan">Free shipping</span> on order $50 or more <span class="secondSpan"> Restrictions apply</span></p>
        </div>

        <div class="midDiv"></div>

        <div class="secondRnav">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-disc"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m0 7.66a1 1 0 0 0 -1 1a4 4 0 0 1 -4 4a1 1 0 0 0 0 2a6 6 0 0 0 6 -6a1 1 0 0 0 -1 -1m-5 -1a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -4a6 6 0 0 0 -6 6a1 1 0 0 0 2 0a4 4 0 0 1 4 -4a1 1 0 0 0 0 -2" /></svg>

          <p> Earn <span class="myNin">My Nintendo Points</span> on digital games </p>
        </div>

      </div>
    </div>
  )
}

export default Lowerheader
