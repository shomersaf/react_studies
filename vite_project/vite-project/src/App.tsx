// import { useState } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import AddExpense from './components/Add-expense'
import Reports from './components/Reports'
import ExpensesList from './components/Expenses-list'

import './App.css'
// export type Expense = typeof data[0]
// const newExpense:Expense = {
//   date:new Date(),
//   amount:111,
//   name:"blabla",
//   category:"od blabla akhat",
// } 
// console.log(newExpense);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Header color = {"red"} text={"My Expenses"}/>
<Controls />
<AddExpense />
<Reports />
<ExpensesList />
    </>
  )
}

export default App
