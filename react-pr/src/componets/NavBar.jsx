import CarWidget from "./CarWidget";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Lo más nuevo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Ropa</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Minifiguras</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Accesorios</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#"><CarWidget /></a>
            </li>
        </ul>
    )
}

export default NavBar;