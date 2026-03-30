import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="text-white">
      <Header />

      <div className="p-8 grid md:grid-cols-3 gap-6 bg-stone-950">
        <div className="bg-stone-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Fast</h2>
          <p>Lightning fast performance with React.</p>
        </div>

        <div className="bg-stone-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Modern</h2>
          <p>Clean and modern UI using Tailwind CSS.</p>
        </div>

        <div className="bg-stone-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scalable</h2>
          <p>Build scalable and maintainable apps.</p>
        </div>
      </div>
    </div>
  )
}

export default Home