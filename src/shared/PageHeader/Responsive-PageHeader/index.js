/* -------------------------------------------------------- */
/*                     Dependencies                         */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container } from 'react-grid-system';

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
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </Container>
    )
}

export default ResponsiveHeader;