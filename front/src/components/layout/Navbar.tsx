import Button from "../ui/Button";
import logo from "../../assets/images/logo-icon.png";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar__container">

                {/* LOGO */}
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                    <span>EXCELSUM</span>
                </div>

                {/* NAV */}
                <nav className="navbar__nav">
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#showcase">Showcase</a>
                    <a href="#ecosystem">Ecosystem</a>
                </nav>

                {/* BUTTON */}
                <Button text="ENQUIRE NOW" />

            </div>
        </header>
    );
}

export default Navbar;