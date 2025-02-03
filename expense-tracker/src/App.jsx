import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './assets/ExpenseForm.jsx'
import ExpenseFilter from './assets/ExpenseFilter.jsx'
import ExpenseList from './assets/ExpenseList.jsx'
function App() {
  const [expenses,setExpenses] = useState([])
  const [filter,setFilter]= useState("")
  const addExpense = (expense)=>{
    setExpenses((prevExpenses)=> [...prevExpenses,expense])
    console.log(expenses,filter)
  }
  const filteredExp = expenses.filter((expense)=> 
  filter? expense.category === filter:true)
  console.log(`filteredExp1: ${filteredExp}`)
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense}/>
      <ExpenseFilter setFilter={setFilter}/>
      <ExpenseList expenses = {filteredExp} />
    </>
  )
}

export default App
