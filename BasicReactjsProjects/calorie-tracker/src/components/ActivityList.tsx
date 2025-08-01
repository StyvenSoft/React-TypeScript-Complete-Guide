import { Activity } from "../types"
import { categories } from "../data/categories";
import { useMemo, Dispatch } from "react";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

    console.log(activities);
    const categoryName = useMemo(() =>
        (category: Activity['category']) =>
            categories.map(cat => cat.id === category ? cat.name : '')
        , [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Lista de Actividades</h2>

            {isEmptyActivities ? <p className="text-center py-10">No hay actividades aún registradas...</p> :
                activities.map(activity => (
                    <div key={activity.id} className="px-5 py-10 bg-gray-50 rounded-lg border border-slate-300 mt-5 flex justify-between transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                ${activity.category === 1 ? 'bg-lime-400' : 'bg-orange-400'}`}>
                                {categoryName(+activity.category)}
                            </p>
                            <p className="text-2xl font-bold pt-5">
                                {activity.nameActivity}
                            </p>
                            <p className="font-black text-4xl text-lime-300">
                                {activity.calories} {''}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-700 cursor-pointer"
                                />
                            </button>

                            <button
                                onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                            >
                                <XCircleIcon
                                    className="h-8 w-8 text-red-500 cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
