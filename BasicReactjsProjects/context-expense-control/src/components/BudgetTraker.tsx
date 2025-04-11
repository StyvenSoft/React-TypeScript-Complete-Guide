import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import "react-circular-progressbar/dist/styles.css"


export const BudgetTraker = () => {

    const { state, totalExpenses, remainingBudget, dispatch } = useBudget()
    const percentage = +((totalExpenses / state.budget) * 100).toFixed(1)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: 'f5f5f5'
                    })}
                    text={`${percentage}%`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-400 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer"
                    onClick={() => dispatch({ type: 'reset-app'})}
                >
                    Resetear App
                </button>
                <AmountDisplay
                    label='Presupuesto'
                    amount={state.budget}
                />
                <AmountDisplay
                    label='Disponible'
                    amount={remainingBudget}
                />
                <AmountDisplay
                    label='Gastado'
                    amount={totalExpenses}
                />
            </div>
        </div>
    )
}
