/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container } from 'react-grid-system';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*               SECTION TITLE COMPONENT                    */
/* -------------------------------------------------------- */
function SectionTitle({title, japaneeseTitle}) {
  /* *********************** RENDERING ******************** */
  return (
    <Container className='section-title flex justify-between fluid'>
        <h2>{title}</h2>
        <h3>{japaneeseTitle && japaneeseTitle}</h3>
    </Container>
  );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    japaneeseTitle: PropTypes.string,
}

export default SectionTitle;