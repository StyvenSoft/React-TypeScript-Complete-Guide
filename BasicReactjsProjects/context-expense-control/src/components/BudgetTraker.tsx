import AmountDisplay from "./AmountDisplay"


export const BudgetTraker = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/icons/grafico.jpg" alt="Gráfico de gastos" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button
                type="button"
                className="bg-pink-400 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer"
            >
                Resetear App
            </button>
            <AmountDisplay
                label='Presupuesto'
                amount={300}
            />
            <AmountDisplay
                label='Disponible'
                amount={300}
            />
            <AmountDisplay
                label='Gastado'
                amount={300}
            />
        </div>
    </div>
  )
}
