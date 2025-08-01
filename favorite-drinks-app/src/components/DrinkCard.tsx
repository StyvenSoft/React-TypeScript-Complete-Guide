import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipes)

    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`}
                    className="hover:scale-110 transition-transform hover:rotate-2"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="cursor-pointer bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-lg"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver receta
                </button>
            </div>
        </div>
    )
}