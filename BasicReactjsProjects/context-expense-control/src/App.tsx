import { useEffect, useMemo } from "react"
import BudgeForm from "./components/BudgeForm"
import { useBudget } from "./hooks/useBudget"
import { BudgetTraker } from "./components/BudgetTraker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

  const { state } = useBudget()

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
      <header className="bg-blue-400 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-3xl text-white">
          App planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white show-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTraker /> : <BudgeForm /> }
      </div> 

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  )
}

export default App
