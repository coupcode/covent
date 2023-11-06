import { useState } from 'react'
import './App.css'
import Routers from './utils/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers />
    </>
  )
}

export default App
