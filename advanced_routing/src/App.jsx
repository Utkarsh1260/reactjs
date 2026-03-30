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

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
               <Route path="developer" element={<Developer />} /> //Nested route
          <Route path="author" element={<Author />} /> //Nested route
          
          </Route>
          <Route path="/contact" element={<Contact />} />
     
          <Route path="*" element={<NoteFound />} /> // when user type that route that not exist
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App