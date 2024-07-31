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
      className={`bg-white w-full p-3 rounded-lg text-sm flex flex-col gap-4 ${className}`}
    >
      <div id="card-top" className="flex flex-row flex-wrap justify-between">
        <label htmlFor={amountInputId} className="">
          {label}
        </label>
        <h3 className="">Currency Type</h3>
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
            className="outline-none bg-transparent py-1.5 text-black"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />

          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black font-semibold"
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
            value={selectCurrency}
          >
            {currencyOptions.map((currency) => (
              <option value={currency}
              className="bg-transparent"
              >{currency}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
