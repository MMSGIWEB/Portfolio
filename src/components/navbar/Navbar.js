import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logolast.png';
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });
    const [nav, setNav] = useState(false);

    const hambMenu = () => {
        setNav(!nav);
    };

    return (
        <header className="navbar mobVbox">
            <div className="logo">
                <img src={logo} alt="logo MariaIntWeb" />
            </div>

            {/* Affichage du menu en fonction de la taille de l'écran */}
            {isSmallScreen ? (
                // Menu Burger (mobile)
                <nav className="mobV">
                    <button onClick={hambMenu} className="hamburger-icon">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* Menu déroulant pour mobile */}
                    {nav && (
                        <div className="mobNav">
                            <NavLink to="/Portfolio" className="link indexLink">
                                <div className="index">HOME</div>
                            </NavLink>
                            <a href="#projects" className="link aboutLink">
                                <div className="about">PROJECTS</div>
                            </a>
                            <a href="#skills" className="link aboutLink">
                                <div className="about">SKILLS</div>
                            </a>
                            <NavLink to="/about" className="link aboutLink">
                                <div className="about">ABOUT</div>
                            </NavLink>
                            <NavLink to="/Contact" className="link aboutLink">
                                <div className="about">CONTACT</div>
                            </NavLink>
                        </div>
                    )}
                </nav>
            ) : (
                // Menu Desktop
                <nav className="navigation">
                    <NavLink to="/Portfolio" className="link indexLink">
                        <div className="index">HOME</div>
                    </NavLink>
                    <a href="#projects" className="link aboutLink">
                        <div className="about">PROJECTS</div>
                    </a>
                    <a href="#skills" className="link aboutLink">
                        <div className="about">SKILLS</div>
                    </a>
                    <NavLink to="/about" className="link aboutLink">
                        <div className="about">ABOUT</div>
                    </NavLink>
                    <NavLink to="/Contact" className="link aboutLink">
                        <div className="about">CONTACT</div>
                    </NavLink>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
