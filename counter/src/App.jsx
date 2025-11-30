import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [counter, setcounter] = useState(0)

  const addValue = () =>{
    if (counter < 20) {
      setcounter(counter + 1)
    }else {
      setcounter(20);
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    } else {
      setcounter(0);
  }

  }
  return (
    <>
      <h1>Hepin With React Js</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
