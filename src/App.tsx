import React, { useState } from 'react'
import { createContext } from 'react'
import NavbarComponent from './components/contextuse/NavbarComponent'
import TodoTaskManager from './components/reduceruse/TodoTaskManager'

export const ThemeContext = createContext({darkMode:true, toggleTheme:()=>{}})
const App = () => {

  const [darkMode,setDarkMode] = useState(true)
  function toggleTheme(){
    setDarkMode((prevstate)=> !prevstate)
    console.log(darkMode)
  }
  return (
    <div>
      {/* PART I USECONTEXT */}
      {/* <ThemeContext.Provider value={{darkMode, toggleTheme}}>
        <div style={{backgroundColor:darkMode?"black":"white", color:darkMode?"white":"black"}}>
          <NavbarComponent />
        </div>
      </ThemeContext.Provider> */}

        {/* PART II USEREDUCER */}
        <div>
          <TodoTaskManager />
        </div>

    </div>
  )
}

export default App
