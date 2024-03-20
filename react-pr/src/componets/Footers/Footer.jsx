import Logo from "../Headers/Logo";
import SocialMedia from "./SocialMedia";

const Footer = () =>  {
    return(
        <div className="container-fluid bg-dark1 my-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <Logo />
                        <h4 className="text-light py-3">Subscribe to the Red Bull Shop newsletter and receive a <span className="text-danger">15% voucher</span></h4>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <ul className="nav d-flex flex-column">
                            <li className="nav-item"><a className="nav-link text-light" href="#">Help & FAQs</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Delivery & returns</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Size charts</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Gift cards</a></li>
                        </ul>
                    </div>
                    <div className="col-sm- col-lg-3">
                        <ul className="nav d-flex flex-column">
                            <li className="nav-item"><a className="nav-link text-light" href="#">Contact us</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Store locations</a></li>
                            <li className="nav-item"><p className="nav-link text-light">Social media:</p></li>
                            <SocialMedia />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;