/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Row, Col } from 'react-grid-system';

// Images
import FOLLOW_ARROW from '../../images/Icons/follow-arrow.svg';
// Local Components
import SectionTitle from '../Section-title';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                       CONTACT ME                         */
/* -------------------------------------------------------- */
function ContactMe() {
  /* *********************** RENDERING ******************** */
  return (
    <Container className="contact-wrapper flex flex-columns justify-between fluid">
        <SectionTitle title="CONTACT --- ME" japaneeseTitle="ウェブ開発者" />
        <Row className="contact-container fluid">
            <Col className="contact-container__content flex items-end fluid" xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <h4>Let’s collaborate and make a stunning work together</h4>
                <img src={FOLLOW_ARROW} alt="follow-arrow" />
            </Col>

            <Col className="contact-container__form fluid" xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <form>
                    <Container className="group-form fluid">
                        <label>
                            NAME
                            <input type="text" placeholder='Full Name' />
                        </label>
                    </Container>
                    
                    <Container className="group-form fluid">
                        <label>
                            E-MAIL
                            <input type="text" placeholder='Your E-mail Adress' />
                        </label>
                    </Container>

                    <Container className="group-form fluid">
                        <label>
                            MESSAGE
                            <textarea className='message-box' placeholder='Message' />
                        </label>
                    </Container>

                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactMe;
