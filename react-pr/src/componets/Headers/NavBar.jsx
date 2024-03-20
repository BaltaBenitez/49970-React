import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to={"/contenido"}>TODO</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to={"/category/ropa"}>ROPA</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to={"/category/figuras"}>FIGURAS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to={"/category/accesorios"}>ACCESORIOS</NavLink>
                </li>
            </ul>
            <div className="ms-auto text-center">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;