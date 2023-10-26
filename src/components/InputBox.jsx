import { useId } from "react"

function InputBox({title,optionsList,amount,onCurrencyChange,onCurrencyTypeChange,selectCurrency,isDisabled=true}) {
    const amountInputId = useId()
  return (
    <div>
        <h2 className="font-bold">{title}</h2>
    <div className="hover:shadow-md flex space-x-3 font-serif border border-2 rounded-md my-2">
        <input  id={amountInputId} value={amount} type="number" className=" px-3 py-1 outline-none" placeholder="Enter Currency" onInput={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={isDisabled}/>
        <select className="shadow-sm  duration-100 rounded-md  p-3 outline-none" value={selectCurrency} onChange={(e) => onCurrencyTypeChange && onCurrencyTypeChange(e.target.value)}>
            {optionsList?.map(options=>( <option value={options} key={options}> {options}</option>))}
        </select>
    </div>
    </div>
  )
}

export default InputBox