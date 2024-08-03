import React, { useId } from "react";
import "../App.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(null);

  return (
    <div
      className={`bg-white dark:bg-slate-900 w-full p-3 rounded-lg text-sm flex flex-col gap-4 ${className}`}
    >
      <div id="card-top" className="flex flex-row flex-wrap justify-between">
        <label htmlFor={amountInputId} className="text-black dark:text-white">
          {label}
        </label>
        <h3 className="text-black dark:text-white">Currency Type</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          id="card-bottom"
          className="flex flex-row flex-wrap justify-between"
        >
          <input
            id={amountInputId}
            className="outline-none bg-transparent py-1.5 text-black dark:text-white"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />

          <select
            className="rounded-lg px-1 py-1 bg-gray-100 dark:bg-slate-800 cursor-pointer outline-none text-black dark:text-white font-semibold"
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
            value={selectCurrency}
          >
            {currencyOptions.map((currency) => (
              <option value={currency}
              className="bg-white dark:bg-slate-900 text-black dark:text-white"
              >{currency}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
