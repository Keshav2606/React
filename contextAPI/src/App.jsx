import React, { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import ThemeContext from "./context/ThemeContext";

function App() {

  const [theme, setTheme] = useState('light')

  const lightTheme = () => {
    setTheme('light')
  }

  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  })

  return (
    <ThemeContext.Provider value={{theme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-slate-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
