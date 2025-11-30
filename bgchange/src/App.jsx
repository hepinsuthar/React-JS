import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  return (
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white rounded px-3 py-2'>
            <button onClick={() => setcolor("Red")} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "red"}}>Red
            </button>
            <button onClick={() => setcolor("Green")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "green"}}>Green
            </button>
            <button onClick={() => setcolor("Blue")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Blue "}}>Blue
            </button>
            <button onClick={() => setcolor("Yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Yellow "}}>Yellow
            </button>
            <button onClick={() => setcolor("Pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Pink "}}>Pink
            </button>
            <button onClick={() => setcolor("White")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "White "}}>White
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
