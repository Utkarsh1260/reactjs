import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
      <Button/>
    </div>
  )
}

export default App
