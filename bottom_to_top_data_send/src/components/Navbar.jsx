import React from 'react'

const Navbar = (props) => {

    function themeChange() {
      console.log('theme change');
      props.setTheme('Dark')
      
    }

  return (
    <div>
    
      <button onClick={themeChange}>Change Theme</button>
    </div>
  )
}

export default Navbar
