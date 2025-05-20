import { useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    
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
                { isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-15 p-10 rounded-lg">
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>
                            <input 
                                type="text"
                                id="ingredients"
                                name="ingredients"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white text-gray-900"
                                placeholder="Nombre o ingrediente."
                            />
                        </div>
                    </form>
                )}
            </div>
        </header>
    )
}
