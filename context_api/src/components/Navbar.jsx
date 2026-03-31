
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Navbar = () => {

    const [theme]=useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h1>t</h1>
      <Nav2 />
    </div>
  )
}

export default Navbar
