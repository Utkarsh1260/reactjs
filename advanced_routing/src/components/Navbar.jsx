import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-stone-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-amber-400">Home</Link>
        <Link to="/about" className="hover:text-amber-400">About</Link>
        <Link to="/dynamic-routing" className="hover:text-amber-400">Dynamic Routing</Link>
        <Link to="/contact" className="hover:text-amber-400">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
