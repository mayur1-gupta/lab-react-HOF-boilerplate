import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HigherOrderComponents from './components/HOC'

function App() {
  const [count, setCount] = useState(0)

  return (
  <HigherOrderComponents/>
   
  )
}

export default App
