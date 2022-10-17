/* -------------------------------------------------------- */
/*                     Dependencies                         */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container } from 'react-grid-system';

// PropType
import PropTypes from 'prop-types';

// Images
import CLOSE_MENU from '../../../images/Icons/close.svg';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                      PAGE HEADER                         */
/* -------------------------------------------------------- */
function ResponsiveHeader({isOpen, setIsOpen}) {
    /* ****************** RENDERING *********************** */
    return (
        <Container className={`${isOpen ? 'show-menu' : 'hide-menu'} responsive-header flex flex-columns items-center justify-center fluid`}>
            <Container
                className='close-menu fluid'
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={CLOSE_MENU} alt="close-menu-icon" />
            </Container>
            
            <ul className='text-center'>
                <li onClick={() => setIsOpen(false)}><a href="/#about">About</a></li>
                <li onClick={() => setIsOpen(false)}><a href="/projects">Projects</a></li>
                <li onClick={() => setIsOpen(false)}><a href="/#services">Services</a></li>
                <li onClick={() => setIsOpen(false)}><a href="/#contact">Contact</a></li>
            </ul>
        </Container>
    )
}

ResponsiveHeader.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
}

export default ResponsiveHeader;