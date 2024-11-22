import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logolast.png'

function Navbar() {

    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className="navigation" >
                <NavLink to="/" className="link indexLink">
                    <div className="index" >HOME</div>
                </NavLink>
                <NavLink to="/about" className="link aboutLink">
                    <div className="about" >PROJECTS</div>
                </NavLink>
                <NavLink to="/about" className="link aboutLink">
                    <div className="about" >SKILLS</div>
                </NavLink>
                <NavLink to="/about" className="link aboutLink">
                    <div className="about" >ABOUT</div>
                </NavLink>
                <div className="link aboutLink">
                    <div className="about" >CONTACT</div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;