import { useMemo } from "react"
import type { Activity } from "../types"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ?
        total + activity.calories : total, 0), [activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                {caloriesConsumed}
            </p>
        </>
    )
}
