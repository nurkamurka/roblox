import { NavLink, Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <>
            <nav className="container">
                <NavLink>robloxland</NavLink>
                <div>
                    <NavLink>О нас</NavLink>
                    <NavLink>Курсы</NavLink>
                    <NavLink>Попробовать</NavLink>
                    <NavLink>Платформа</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}   