/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Row, Col } from 'react-grid-system';

// Local Components
import SectionTitle from '../Section-title';

// Images
import PROFILE_ABOUT_IMG from '../../images/About-section/profile-img.png';

// PDFs
import DOWNLOAD_CV from '../../PDFs/cv.pdf';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                  About section                           */
/* -------------------------------------------------------- */
function About() {
  /* *********************** RENDERING ******************** */
  return (
    <Container id="about" className='about-wrapper flex flex-columns justify-evenly fluid'>
        <SectionTitle title="ABOUT" />
        <Row className="about-container fluid">
            <Col className="about-container__profile-image fluid" 
            xxl={4} xl={4} lg={4} md={5} sm={12} xs={12}>
                <img src={PROFILE_ABOUT_IMG} alt="zahra_profile_IMG" />
                <h4>“Let’s<br/>collaborate<br/>and Make Your<br/>Design REAL”</h4>
            </Col>
            
            <Col className="about-container__content flex flex-columns justify-end fluid" 
            xxl={8} xl={8} lg={8} md={7} sm={12} xs={12}>
                <p>I’am zahra, graduated from higher school of digital economy, Passionate about web developement and design, always eager to learn and share knowledge.</p>
                <p>My Job is to create catchy, modern and responsive portfolio for YOU and i do integrate the given designs using reactsJs / Gatsby</p>
                <a className="flex justify-center items-center" href={DOWNLOAD_CV} target="blank">DOWNLOAD CV</a>
            </Col>
        </Row>
    </Container>
  );
}

export default About;
