import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  let [color, setColor] = useState("olive")
  return (
    <>
    <div style={{backgroundColor: color}} className='w-screen h-screen'>
      <div style={{backgroundColor: color}}
      className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <Button color="Red" onclick={()=> setColor('red')} />
          <Button color="Blue" onclick={()=> setColor('blue')} />
          <Button color="Green" onclick={()=> setColor('green')} />
          <Button color="Yellow" onclick={()=> setColor('yellow')} />
          <Button color="Magenta" onclick={()=> setColor('magenta')} />
          <Button color="Black" onclick={()=> setColor('black')} />
          <Button color="Orange" onclick={()=> setColor('orange')} />
          <Button color="Purple" onclick={()=> setColor('purple')} />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
