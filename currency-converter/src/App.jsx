import { useEffect, useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import ThemeContext from "./contexts/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(convert, [amount]);

  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
      <div id="main" className="w-full h-screen flex justify-center">
        <div
          id="container"
          className="w-2/5 h-fit bg-gray-700 dark:bg-gray-300 bg-opacity-60 dark:bg-opacity-30 px-4 py-6 rounded-lg my-auto flex flex-col justify-center gap-4"
        >
          <div className="w-1/3">
            <ThemeBtn />
          </div>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
            onCurrencyChange={(currency) => setFrom(currency)}
          />
          <button
            onClick={swap}
            className="bg-blue-800 dark:bg-slate-800 text-white px-3 rounded-lg py-2 absolute top-1/2 left-1/2 -translate-x-10 -translate-y-8 border-white dark:border-slate-900 outline-none"
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisable
          />

          <button
            onClick={convert}
            className="bg-blue-800 dark:bg-slate-800 text-white outline-none"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
