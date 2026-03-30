import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-white p-10">
      <Link to='/about/developer'>Developer</Link>
      <Link to='/about/author'>Author</Link>
      <Outlet/>
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="max-w-3xl space-y-4 text-gray-300">
        <p>
          This is a modern React application styled with Tailwind CSS.
        </p>
        <p>
          Our goal is to build clean, fast, and responsive web apps.
        </p>
        <p>
          This project demonstrates routing, reusable components, and UI design.
        </p>
      </div>
    </div>
  )
}

export default About