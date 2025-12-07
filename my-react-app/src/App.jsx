import { useEffect, useState } from 'react'
import App2 from './App2'
import App3 from './App3'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  useEffect(() => {
    console.log('App component mounted')
  }, [])
  const [count, setCount] = useState(0)
  const [text , setText] = useState('')
  const [show , setShow] = useState(true)
  const isLogged = true;
  const name = 'Hepin'
  const color = ['red', 'blue', 'green']
  function click() {
    alert('Hello ' + name)
  }
  return (
    <>
      <div>
        <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button> <br /> <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <br /> <br />
        <input type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Enter text here"}
        />
        <p>Your text is: {text}</p>
        <h1>Hello React</h1>
        <p>My name is {name}</p>
        <p>This is my first component</p>
        <input type={show ? "text" : "password"} />
        <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
        </button>
        <h1>useEffect Example</h1>
      </div>
      <App2 name={name} />
      <button onClick={click}>Click Me</button>
      {isLogged ? <p>Welcome back, {name}!</p> : <p>Please log in.</p>}
      <ul>
        {color.map((col, index) => (
          <li key={index}>{col}</li>
        ))}
      </ul>
    </>
  )
}

export default App
