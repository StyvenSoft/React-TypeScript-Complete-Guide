import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    return (
        <header className="bg-slate-700">
            <div className="mx-auto container px-5 py-10">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img className="w-32" src="/logo.svg" alt="Logotipo" />
                        </Link>
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-400 uppercase font-bold'
                                    : 'text-white uppercase font-bold'}>
                            Inicio
                        </NavLink>
                        <NavLink to="/favorites"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-400 uppercase font-bold'
                                    : 'text-white uppercase font-bold'}>
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-15 p-10 rounded-lg">
                        <div className="space-y-4 mb-3">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>
                            <input
                                type="text"
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white text-gray-900"
                                placeholder="Nombre o ingrediente."
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />
                        </div>
                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>
                            <select
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white text-gray-900 mb-8"
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            >
                                <option value="1">-- Seleccione --</option>
                                {categories.drinks.map(category => (
                                    <option
                                        value={category.strCategory}
                                        key={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit"
                            value="Buscar Recetas"
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
