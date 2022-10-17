/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useState } from 'react';
import { Container } from 'react-grid-system';

// PropTypes
import PropTypes from 'prop-types';

// Local Components

// Images
import CLOSE_ICON from '../../../images/Icons/close.svg';
import PINK_CHECK_ICON from '../../../images/Icons/pink-check-in-circle.png';

// Styles
import './index.scss';
import { useEffect } from 'react';

/* -------------------------------------------------------- */
/*                   MESSAGE SENT POP UP                    */
/* -------------------------------------------------------- */
function MessageSentPopUp({ setPopUpIsOpen }) {
    const [hidePopUp, setHidePopUp] = useState(false);

    /* ----- HIDE MESSAGE SENT POP UP AFTER 3SECONDS ------ */
    useEffect(() => {
        setTimeout(function() {
            setHidePopUp(!hidePopUp);
        }, 3000)
    }, [])

  /* *********************** RENDERING ******************** */
  return (
    <>
    {!hidePopUp && (
        <>
            <Container className="border-bottom fluid" />
            <Container className="message-sent-pop-up-wrapper flex items-center">
                <Container className="close-icon fluid"
                onClick={() => setPopUpIsOpen(false)}>
                    <img src={CLOSE_ICON} alt="close-icon" />
                </Container>
                <Container className="message flex fluid">
                    <img src={PINK_CHECK_ICON} alt="message-sent-icon" />
                    <h2>Message sent</h2>
                </Container>
            </Container>
        </>
    )}
    </>
  );
}

MessageSentPopUp.propTypes = {
    setPopUpIsOpen: PropTypes.func.isRequired,
};

export default MessageSentPopUp;
