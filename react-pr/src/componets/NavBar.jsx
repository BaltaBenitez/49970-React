import CarWidget from "./CarWidget";

const NavBar = () => {
    /* return (
        <>
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
        </>
    ) */
    return (
        <div className="row">
            <div className="col">
                <ul className="nav ">
                    <li className="nav-item">
                        <a className="nav-link text-light fs-5" href="#">Lo más nuevo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-5" href="#">Ropa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-5" href="#">Minifiguras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-5" href="#">Accesorios</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-end text-end">
                <a className="nav-link text-dark fs-5" href="#"><CarWidget /></a>
            </div>
        </div>
    )
}

export default NavBar;