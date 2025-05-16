import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
            </div>
        </header>
    )
}
