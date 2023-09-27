import { useState, useEffect } from 'react'
import './App.css'
import services from './services/service'

const calc = () => {
  
  return (
    <>
      <h1>placeholder</h1>
    
    </>
  )
}
const about = () => {
  return (
    <>
        <h1>Food tracker</h1>
      <div className="card">
        <a href="">Test</a>
      </div>

    </>
    )
}
const compare = () => {
  return (
    <>
    <h1>comparing</h1>
    </>
  )
}
const rec = () => {
  return (
    <>
    <h1>Food recs</h1>
    </>
  )
}
function App() {
  
  const [show, setShow] = useState("about")
  const [key, setKey] = useState("")

  const hook = () => {
    services.retrieve()
    .then(response => setKey(response))
    .catch(error => {console.log(error)})
  }
  useEffect(hook, [])
  
  
  
  
    return (
      <>
        <nav className="banner">
        <ul>
          <button onClick={() => setShow("about")}>About</button>
          <button onClick={() => setShow("calc")}>Nutrition Calculator</button>
          <button onClick={() => setShow("compare")}>Compare</button>
          <button onClick={() => setShow("rec")}>Recc Food</button>
        </ul></nav>
        <h1>save me</h1>
        {
          (show === "calc") ?
          calc()
          :
          (show === "about") ?
          about()
          :
          (show === "compare") ?
          compare()
          :
          (show === "rec") ?
          rec()
          :
          about()
        }
      
      </>
      
    )
    
  
}

export default App
