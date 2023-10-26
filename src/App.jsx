import { useState } from "react"
import { InputBox } from "./components"
import userCurrencyList from "./hooks/useCurrencyList"

function App() {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [fromType, setFromType] = useState('inr')
  const [toType, setToType] = useState('usd')
  const data = userCurrencyList(toType)
  const onFromCurrecyChange = (curr)=>{
    setFrom(curr)
  }
  const onFromCurrecyTypeChange = (curr)=>{
    setFromType(curr)
  }
  const onToCurrecyChange = (curr)=>{
    setTo(curr)
  }
  const onToCurrecyTypeChange = (curr)=>{
    setToType(curr)
  }
  const onSwapClick = ()=>{
    setFromType(toType)
    setFrom(to)
    setTo(from)
    setToType(fromType)
  }
  const onConverClick = ()=>{
    setTo(from * data[fromType])
  }

  return (
   <>
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="border rounded-md flex-col m-12 shadow-md p-8 md:flex-row bg-white">
      <div className="flex flex-col items-center space-y-3 my-3">
    <h1 className="text-xl font-bold text-blue-900">Currency  Converter</h1>
    <div className="w-24 rounded-r-xl h-1 bg-blue-900"></div>
    </div>
    <div className="flex rounded-md flex-col md:flex-row bg-white items-center">
      <img src="https://img.freepik.com/free-vector/currency-exchange-service-monetary-transfer-changing-dollar-euro-buying-selling-foreign-money-golden-coins-with-eu-us-currency-symbols-vector-isolated-concept-metaphor-illustration_335657-2818.jpg?w=2000" className="w-72 h-72 object-contain"/>
      <div className=" flex flex-col justify-around items-center space-y-4">
        <InputBox title="From" optionsList={Object.keys(data)} amount={from} onCurrencyChange={onFromCurrecyChange} onCurrencyTypeChange={onFromCurrecyTypeChange} selectCurrency={fromType} isDisabled={false}/>
        <button className="bg-blue-200 inline-block text-blue-900 font-bold p-3 text-sm rounded-md" onClick={onSwapClick}>Swap &#8597;</button>
        <InputBox title="To" optionsList={Object.keys(data)}  amount={to} onCurrencyChange={onToCurrecyChange} onCurrencyTypeChange={onToCurrecyTypeChange} selectCurrency={toType}/>
        <button className="p-3 border bg-blue-600 hover:border-blue-600 hover:bg-white hover:text-blue-600 duration-200 rounded-lg text-white font-serif w-full mt-3" onClick={onConverClick} >Convert</button>
      </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default App
