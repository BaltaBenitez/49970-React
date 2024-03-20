import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark1">
        <div className="container">
            <Logo />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <NavBar />
        </div>
      </nav>
    )
}

export default Header;