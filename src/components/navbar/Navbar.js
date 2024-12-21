import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logolast.png';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { contactRef, projectsRef, scrollToSection, skillsRef } from '../refs/refs';

function Navbar() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' });
    const [nav, setNav] = useState(false);

    const hambMenu = () => {
        setNav(!nav);
    };

    return (
        <header className='navbar mobVbox'>
            <div className='logo'>
                <img src={logo} alt='logo MariaIntWeb' />
            </div>
            {/* Affichage du menu en fonction de la taille de l'écran */}
            <nav className={isSmallScreen ? 'mobV' : 'navigation'}>
                {isSmallScreen && (
                    // Menu Burger (mobile)
                    <button onClick={hambMenu} className='hamburger-icon'>
                        <i className='fa-solid fa-bars'></i>
                    </button>
                )}
                {/* Menu déroulant pour mobile */}
                {isSmallScreen ? (
                    <>
                        {nav && (
                            <div className='mobNav'>
                                <NavLink to='/Portfolio' className='link navTitle indexLink'>
                                    <div className='index'>HOME</div>
                                </NavLink>

                                <a href='#projects' Onclick={() => scrollToSection(projectsRef)} className='link navTitle aboutLink'>
                                    <div className='about'>PROJECTS</div>
                                </a>
                                <a href='#skills' Onclick={() => scrollToSection(skillsRef)} className='link navTitle aboutLink'>
                                    <div className='about'>SKILLS</div>
                                </a>
                                <NavLink to='/about' className='link navTitle aboutLink'>
                                    <div className='about'>ABOUT</div>
                                </NavLink>
                                <a href='#contact_form' Onclick={() => scrollToSection(contactRef)}
                                    className='link navTitle aboutLink'>
                                    <div className='about'>CONTACT</div>
                                </a>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Menu Desktop */}
                        <NavLink to='/Portfolio' className='link indexLink'>
                            <div className='index'>HOME</div>
                        </NavLink>
                        <a href='#projects' Onclick={() => scrollToSection(projectsRef)} className='link aboutLink'>
                            <div className='about'>PROJECTS</div>
                        </a>
                        <a href='#skills' Onclick={() => scrollToSection(skillsRef)} className='link aboutLink'>
                            <div className='about'>SKILLS</div>
                        </a>
                        <NavLink to='/about' className='link aboutLink'>
                            <div className='about'>ABOUT</div>
                        </NavLink>
                        <a href='#contact_form' Onclick={() => scrollToSection(contactRef)} className='link aboutLink'>
                            <div className='about'>CONTACT</div>
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
