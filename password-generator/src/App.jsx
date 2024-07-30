import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [isNumAllowed, setNumAllowed] = useState(false);
  let [isCharAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumAllowed) str += "0123456789";
    if(isCharAllowed) str += "!@#$%^&*_";

    for(let i=0; i<length; i++){
      pass += str[Math.round(Math.random()* (str.length-1))]
    }
    
    setPassword(pass)

  }, [length, isNumAllowed, isCharAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumAllowed, isCharAllowed, passwordGenerator])

  return (
      <div id="main" className="w-full h-screen bg-slate-900 grid place-content-center">
        <h1 className="text-white font-bold text-4xl mb-12">Password Generator</h1>
        <div id="container" className="w-fit bg-slate-950 p-12 rounded-xl">
          <form action="">
            <div id="input" className="flex flex-wrap justify-start mb-4 w-full">
              <input
                type="text"
                value={password}
                className="rounded-lg rounded-r-none w-4/5 px-4 py-2 text-black text-2xl"
                readOnly
                ref={passwordRef}
              />
              <input
              id="button"
              onClick={() => {
                copyPassword()
                document.getElementById('button').style.backgroundColor = '#1e3a8a'
                setTimeout(() => {
                  document.getElementById('button').style.backgroundColor = '#1e40af'
                }, 200)
              }}
              type="button" 
              value="Copy" 
              className="bg-blue-800 w-1/5 px-4 py-2 text-white font-bold rounded-lg rounded-l-none cursor-pointer"/>
            </div>
            <div id="configure" className="flex flex-wrap gap-3">
              <input type="range" min={8} max={16} value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }} />
              <label htmlFor="length" className="text-white">
                Length ({length})
              </label>
              <input type="checkbox" name="number" id="number"
              onChange={(prev) => {
                setNumAllowed((prev) => !prev)
              }}/>
              <label htmlFor="number" className="text-white">
                Number
              </label>
              <input type="checkbox" name="character" id="character" 
              onChange={() => {
                setCharAllowed((prev) => !prev)
                }}/>
              <label htmlFor="character" className="text-white">
                Character
              </label>
            </div>
          </form>
        </div>
      </div>
  );
}

export default App;
