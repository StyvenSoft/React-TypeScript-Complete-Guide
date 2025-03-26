import { useMemo } from "react"
import BudgeForm from "./components/BudgeForm"
import { useBudget } from "./hooks/useBudget"
import { BudgetTraker } from "./components/BudgetTraker"

function App() {

  const { state } = useBudget()

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

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
    </>
  )
}

export default App
