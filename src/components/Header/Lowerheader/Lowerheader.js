import React from 'react'

const Lowerheader = () => {
  return (
    <div className="bg-gray-100 p-4 border-t border-b">
      <nav className="flex justify-around text-sm font-medium text-gray-700">
        <a href="#features" className="hover:text-blue-500">Features</a>
        <a href="#pricing" className="hover:text-blue-500">Pricing</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </div>
  )
}

export default Lowerheader
