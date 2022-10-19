/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-grid-system';

// Images
import FOLLOW_ARROW from '../../images/Icons/follow-arrow.svg';

// Local Components
import SectionTitle from '../Section-title';
import MessageSentPopUp from './message-sent-pop-up';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                       CONTACT ME                         */
/* -------------------------------------------------------- */
function ContactMe() {
    const FORM = useRef();
    const [popUpIsOpen, setPopUpIsOpen] = useState(false);

    /* ----------- SEND COLLECTED DATA IN EMAIL ----------- */
    const SendCollectedDataInEmail = (e) => {
        e.preventDefault();
        
        const FORM_USER = document.getElementById("create_user_form");

        emailjs.sendForm('service_swigaow', 
        'template_idzatc9',
        FORM.current,
        'W9S2HDH6yI7WEmEdC')
        .then((result) => {
            setPopUpIsOpen(!popUpIsOpen);
            FORM_USER.reset();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
    };

  /* *********************** RENDERING ******************** */
  return (
    <>
        {popUpIsOpen && <MessageSentPopUp setPopUpIsOpen={setPopUpIsOpen} />}
        <Container id="contact" className="contact-wrapper flex flex-columns justify-between fluid">
        <SectionTitle title="CONTACT --- ME" japaneeseTitle="ウェブ開発者" />
        <Row className="contact-container fluid">
            <Col className="contact-container__content flex items-end fluid" xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <h4>Let’s collaborate and make a stunning work together</h4>
                <img src={FOLLOW_ARROW} alt="follow-arrow" />
            </Col>

            <Col className="contact-container__form fluid" xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <form id="create_user_form"
                    ref={FORM}
                    onSubmit={SendCollectedDataInEmail}>
                    <Container className="group-form fluid">
                        <label htmlFor="name">
                            NAME
                            <input type="text" name="user_name" placeholder='Full Name' required />
                        </label>
                    </Container>
                    
                    <Container className="group-form fluid">
                        <label htmlFor="email">
                            E-MAIL
                            <input id="email" type="email" name="user_email" placeholder='Your E-mail Adress' required />
                        </label>
                    </Container>

                    <Container className="group-form fluid">
                        <label htmlFor="message">
                            MESSAGE
                            <textarea className='message-box' name="message" placeholder='Message' required />
                        </label>
                    </Container>

                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default ContactMe;
