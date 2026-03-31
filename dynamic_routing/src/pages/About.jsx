import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'




const About = () => {

let navigate=useNavigate();
const goHome=()=>{
  navigate('/')
}

const goBack=()=>{
  navigate(-1)
}
const goNext=()=>{
  navigate(+1)
}

  return (
    <div className="min-h-screen bg-stone-950 text-white p-10">

      <button onClick={goHome} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold">
  Go To Home
</button>

<button onClick={goBack} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold">
  Go One step Back
</button> 
<button onClick={goNext} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold">
  Go One step Next
</button> 
      <Link to='/about/developer'>Developer</Link>
      <Link to='/about/author'>Author</Link>
      <Outlet/>
      <h1 className="text-3xl font-bold mb-6">About Us</h1>


    </div>
  )
}

export default About