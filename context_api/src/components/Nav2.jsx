
import { useState } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {


const [theme, setTheme] = useState(ThemeDataContext)

  return (
    <div>
      n2
      <h1>Home1</h1>
      <h1>Home2</h1>
      <h1>Home3</h1>
      <h1>{theme}</h1>

    </div>
  )
}

export default Nav2
