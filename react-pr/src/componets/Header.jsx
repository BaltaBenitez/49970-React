import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header;