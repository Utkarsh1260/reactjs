import React from 'react'

import Navbar from './components/navbar'
import Card from './components/card'

const App = () => {
  return (
    <div>
          <div className="card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <h3>John Doe</h3>
      <p>Simple React card example</p>

      <Card/>
      <Navbar/>
    </div>


  


    </div>
  )
}

export default App
