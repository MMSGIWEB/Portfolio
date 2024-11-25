import { a, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logolast.png'

function Navbar() {

    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className="navigation" >
                <NavLink to="/Portfolio" className="link indexLink">
                    <div className="index" >HOME</div>
                </NavLink>
                <a href="#projects" className="link aboutLink">
                    <div className="about" >PROJECTS</div>
                </a>
                <a href="#skills" className="link aboutLink">
                    <div className="about" >SKILLS</div>
                </a>
                <NavLink to="/about" href="#about" className="link aboutLink">
                    <div className="about" >ABOUT</div>
                </NavLink>
                <NavLink to="/Contact" className="link aboutLink">
                    <div className="about" >CONTACT</div>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;