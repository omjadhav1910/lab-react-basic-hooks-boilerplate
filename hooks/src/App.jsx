import React, { useState } from 'react'
import './App.css'
import UseState from './Components/UseContext'
import UseEffect  from './Components/UseEffect'
import UseContext from './Components/UseState'

export const ToggleTheme = React.createContext()

function App() {

  const [ state, setState] = useState(true)

  const handleToggle = () => {
    setState(state => !state)
  }

  return (
    <>
      <UseState />
      <UseEffect/>
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext/>
      </ToggleTheme.Provider>
    </>
  )
}

export default App