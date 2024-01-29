import { Link, NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/contenido"}>LO MÁS NUEVO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/categoria/ropa"}>ROPA</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/categoria/figuras"}>FIGURAS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/categoria/accesorios"}>ACCESORIOS</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-end text-end">
                <NavLink className="nav-link text-dark fs-5" to={"#"}><CarWidget /></NavLink>
            </div>
        </div>
    )
}

export default NavBar;