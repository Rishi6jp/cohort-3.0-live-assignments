import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex"}}>
      <Card innerContent={"hi there"}/>
      <Card innerContent={<div style={{color: "green"}}>
        hi there
        </div>}/>

    </div>
  )
}

function Card({ innerContent }) {
  return <span style={{background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
    {innerContent}
  </span>
}

export default App
