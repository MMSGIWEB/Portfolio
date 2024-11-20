import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logo.png'

function Navbar() {

    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className="navigation" >
                <NavLink to="/" className="link indexLink">
                    <div className="index" >Accueil</div>
                </NavLink>
                <NavLink to="/about" className="link aboutLink">
                    <div className="about" >A Propos</div>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;