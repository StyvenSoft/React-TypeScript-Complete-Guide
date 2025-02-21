import { ChangeEvent, useState } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"

export default function Form() {

  const [activity, setActivity] = useState<Activity>({
    category: 1,
    nameActivity: '',
    calories: 0,
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    console.log(isNumberField);
    
 
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })

    console.log(e.target.id);
    console.log('Cambios');
  }

  const isValidActivity = () => {
    const { nameActivity, calories } = activity
    return nameActivity.trim() !== '' && calories > 0
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria: </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="nameActivity" className="font-bold">Actividad: </label>
        <input
          id="nameActivity"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Ensalada, Ejercicio, Pesas"
          value={activity.nameActivity}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias: </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300, 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-700 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value='Guardar'
        disabled={!isValidActivity()}
      />
    </form>
  )
}