import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  let [color, changeColor] = useState("white")
  return (
    <>
      <div id="color-buttons" style={{backgroundColor: color}}
      className='rounded-lg fixed flex flex-wrap justify-center bottom-12 inset-x-36 gap-3 p-4 max-w-fit'>
        <Button color="Red" />
        <Button color="Blue" />
        <Button color="Green" />
        <Button color="Yellow" />
        <Button color="Magenta" />
        <Button color="Black" />
        <Button color="Orange" />
        <Button color="Purple" />
      </div>
    </>
  )
}

export default App
