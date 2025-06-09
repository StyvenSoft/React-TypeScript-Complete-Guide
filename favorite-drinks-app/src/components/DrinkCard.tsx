import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
    return (
        <h1>{drink.drinks}</h1>
    )
}