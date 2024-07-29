import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <div>
          <h1 id="counter">Counter: {counter}</h1>
        </div>
        <div className="buttons">
          <button id="increment-btn" onClick={() => {
            counter += 1;
            setCounter(counter)
          }}>Increment Counter {counter}</button>
          <button id="decrement-btn" onClick={() => {
            if(counter > 0) counter -= 1;
            setCounter(counter)
          }}>Decrement Counter {counter}</button>
        </div>
      </div>
    </>
  )
}

export default App
