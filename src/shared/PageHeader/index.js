/* -------------------------------------------------------- */
/*                     Dependencies                         */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useState } from 'react';
import { Container, Hidden, Visible } from 'react-grid-system';

// UI Local Components
import ResponsiveHeader from './Responsive-PageHeader';

// Images
import MENU_ICON from '../../images/Icons/menu.png';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                      PAGE HEADER                         */
/* -------------------------------------------------------- */
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    /* ****************** RENDERING *********************** */
    return (
        <>
            <ResponsiveHeader isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="header flex justify-between items-start">
                <a href="/">
                    <div className='profile-desc'>
                        <h3>ZAHRA KAABI</h3>
                        <h3>Junior front-end reactJs developer</h3>
                    </div>
                </a>

                <Hidden xs sm md lg>
                    <Container className='links flex fluid'>
                        <ul className='links__useful-links'>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/#services">Services</a></li>
                        </ul>
                        <ul className='links__social-media-links'>
                            <li><a href="https://dribbble.com/zahra13" target="blank">Dribbble</a></li>
                            <li><a href="https://github.com/zahrakaabi" target="blank">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/zahra-kaabi/" target="blank">Linkedin</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </Container>
                </Hidden>

                <Visible xs sm md lg>
                    <Container 
                        className="burger-menu fluid"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img src={MENU_ICON} alt="burger_menu" />
                    </Container>
                </Visible>
            </div>
        </>
    )
}

export default Header;