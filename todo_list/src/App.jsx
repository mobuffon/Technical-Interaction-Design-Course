import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import uuivd4 
import ToDoList from './ToDoList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList name="Moritz" initialList={[]} />
      <ToDoList name="Greta" initialList={[]} />
    </>
  )
}

export default App
