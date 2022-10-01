/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useState } from 'react';
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
    const CONTCAT_INPUT = {
        name: '',
        email: '',
        message:'',
    };

    const [contactInfo, setContactInfo] = useState(CONTCAT_INPUT);

    /* -------------------- HANDLE SUBMIT ----------------- */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('saluttttt', contactInfo);
    }

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
                <form onSubmit={handleSubmit}>
                    <Container className="group-form fluid">
                        <label htmlFor="name">
                            NAME
                            <input type="text" name="name" placeholder='Full Name' value={contactInfo.name} onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})} required />
                        </label>
                    </Container>
                    
                    <Container className="group-form fluid">
                        <label htmlFor="email">
                            E-MAIL
                            <input type="email" name="email" placeholder='Your E-mail Adress' value={contactInfo.email} onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})} required />
                        </label>
                    </Container>

                    <Container className="group-form fluid">
                        <label htmlFor="message">
                            MESSAGE
                            <textarea className='message-box' name="message" placeholder='Message' value={contactInfo.message} onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})} required />
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
