/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container } from 'react-grid-system';

// UI Local Components

// Images

// Fake APIs
import { UI_DESIGN_PROJECTS } from '../../../shared/Helpers/FakeAPIs/uidesignProjects';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                   UI DESIGN PROJECTS                     */
/* -------------------------------------------------------- */
function UIDesignProjects() {
  /* *********************** RENDERING ******************** */
  return (
    <Container className='ui-designs-wrapper fluid'>
      {UI_DESIGN_PROJECTS?.map((design, index) => {
        return (
        <Container className="ui-design-container fluid" key={index}>
            <img src={design.image} alt={design.name} />
            <h1>{design.name}</h1>
            <p><strong>Tools: </strong>{design.Tools}</p>
        </Container>
      )})}
    </Container>
  );
}

export default UIDesignProjects;