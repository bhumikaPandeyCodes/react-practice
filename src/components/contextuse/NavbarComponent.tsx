import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
const NavbarComponent = () => {
    const {darkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>Logo</h1>
      navabar
      <div>
        <p>the current theme - </p> <span>{darkMode?"dark":"light"}</span>
      </div>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  )
}

export default NavbarComponent
