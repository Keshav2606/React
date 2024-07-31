import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
    let [amount, setAmount] = useState(0);
    let [from, setFrom] = useState("usd");
    let [to, setTo] = useState("inr");
    let [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const convert = () => {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    }

    
    return (
        <div id='main' className='w-full h-screen flex justify-center'>
            <div id='container'
            className='w-2/5 h-fit bg-gray-500 bg-opacity-50 px-4 py-6 rounded-lg my-auto flex flex-col justify-center gap-4'
            >
            <InputBox 
            label="From" 
            amount={amount}
            currencyOptions={options} 
            selectCurrency={from}
            onAmountChange={(amount) => {
                setAmount(amount);
            }}
            onCurrencyChange={(currency) => (setFrom(currency))} />
            <button
            onClick={() => {
                setFrom(to)
                setTo(from)
            }}
            className='bg-blue-800 text-white px-3 rounded-lg py-2 absolute top-1/2 left-1/2 -translate-x-10 -translate-y-14 border-white outline-none'>
                Swap
            </button>
            <InputBox 
            label="To" 
            amount={convertedAmount} 
            currencyOptions={options} 
            selectCurrency={to}
            onCurrencyChange={(currency) => (setTo(currency))}
            amountDisable />

            <button
            onClick={convert}
            className='bg-blue-800 text-white'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

            </div>


        </div>
    );
}

export default App
