/* -------------------------------------------------------- */
/*                      Dependencies                        */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Row, Col } from 'react-grid-system';
import { useScreenClass } from 'react-grid-system';

// Images
import SCROLL_UP from '../../images/Icons/scroll-up.svg';
import SOCIAL_MEDIA_ICON from '../../images/Icons/go-to.svg';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                      PAGE FOOTER                         */
/* -------------------------------------------------------- */
function Footer() {
    const screenClass = useScreenClass();
    const IS_MOBILE = ['xs', 'sm', 'md'].includes(screenClass);

    /* ****************** RENDERING *********************** */
    return (
        <Container className='footer max-w fluid'>
            <Container className={`centered ${IS_MOBILE ? '' : 'fluid'}`}>
                <a className="scroll-up flex items-center" href="/">
                    <img src={SCROLL_UP} alt="scroll-up-icon" />
                    <h4>SCROLL UP</h4>
                </a>

                <Row className="social-media fluid">
                    <Col className="social-media__link flex items-center fluid" xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
                        <h1>LINKEDIN</h1>
                        <a href="#" traget="blank"><img src={SOCIAL_MEDIA_ICON} alt="go-to-linkedin" /></a>
                    </Col>
                    
                    <Col className="social-media__link flex items-center fluid" xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
                        <h1>GITHUB</h1>
                        <a href="#" traget="blank"><img src={SOCIAL_MEDIA_ICON} alt="go-to-github" /></a>
                    </Col>
                    
                    <Col className="social-media__link flex items-center fluid" xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
                        <h1>MEDIUM</h1>
                        <a href="#" traget="blank"><img src={SOCIAL_MEDIA_ICON} alt="go-to-medium" /></a>
                    </Col>
                    
                    <Col className="social-media__link flex items-center fluid" xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
                        <h1>DRIBBBLE</h1>
                        <a href="#" traget="blank"><img src={SOCIAL_MEDIA_ICON} alt="go-to-dribbble" /></a>
                    </Col>
                </Row>

                <Row className={`copyright ${IS_MOBILE ? '' : 'fluid'}`}>
                    <h4>Copyright © Zahra Portfolio | Designed & Developed by <span>ZAHRA KAABI</span></h4>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;