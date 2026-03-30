import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoteFound from './pages/NoteFound'
import Developer from './pages/Developer'
import Author from './pages/Author'


const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />

      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path="developer" element={<Developer />} />
            <Route path="author" element={<Author />} />
          </Route>

         
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
