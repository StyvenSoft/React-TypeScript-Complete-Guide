import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if (!context) {
        throw new Error('UseBudget must be used whithin a BudgetProvider')
    }
    return context
}