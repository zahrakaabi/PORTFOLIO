/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Row, Col } from 'react-grid-system';

// Local Components
import SectionTitle from '../Section-title';

// Images
import SERVICES_IMG from '../../images/Services-section/services.gif';
import GET_IN_TOUCH_IMG from '../../images/Hero-section/get-in-touch.png';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                       Services                           */
/* -------------------------------------------------------- */
function Services() {
  /* *********************** RENDERING ******************** */
  return (
    <Container id="services" className="services-wrapper flex flex-columns justify-between fluid">
        <SectionTitle title="SERVICES" japaneeseTitle="ウェブ開発者" />
        <Row className="services-container fluid">
            <Col className="services-container__content fluid" xxl={8} xl={8} lg={7} md={8} sm={12} xs={12}>
                <h2>MY ART</h2>
                <h4>ASIDE FROM CODING I CAN HELP YOU IN DESIGN KNOWLEDGE AND DIGITAL PSYCHOLOGY</h4>
                <button type="submit">CONTACT ME</button>
            </Col>

            <Col className="services-container__ART-work fluid" xxl={4} xl={4} lg={5} md={4} sm={12} xs={12}>
                <img src={SERVICES_IMG} alt="art_work" />
                <img src={GET_IN_TOUCH_IMG} alt="get_in_touch_IMG" />
            </Col>
        </Row>
    </Container>
  );
}

export default Services;
