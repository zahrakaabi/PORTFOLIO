/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useState } from 'react';
import { Container, useScreenClass } from 'react-grid-system';

// Local Components
import Header from '../shared/PageHeader';
import SectionTitle from '../pages-components/Section-title';
import Projects from '../pages-components/pages-projects/projects';
import UIDesignProjects from '../pages-components/pages-projects/ui-design-projects';
import Footer from '../shared/PageFooter';

// Images
import YELLOW_ARROW from '../images/Icons/yellow-down-arrow.png';
import ORANGE_ARROW from '../images/Icons/orange-down-arrow.png';

// Styles
import '../shared/Styles/global.scss';
import '../shared/Styles/typography.scss';
import '../pages-styles/ProjectsPage.scss';

/* -------------------------------------------------------- */
/*                    PROJECTS PAGE                         */
/* -------------------------------------------------------- */
function ProjectsPage() {
  const screenClass = useScreenClass();
  const IS_MOBILE = ['xs', 'sm'].includes(screenClass);
  const [buttonValue, setButtonValue] = useState('web_dev');

  /* *********************** RENDERING ******************** */
  return (
    <>
      <Container className={`page-projects centered ${IS_MOBILE ? '' : 'fluid'}`}>
        <Header />
        <SectionTitle title="PROJECTS" />
        <Container className="project-types flex flex-wrap fluid">
          <button className="project-types__web-dev flex justify-center items-center" 
          type="submit"
          onClick={() => setButtonValue('web_dev')}>
            <span className="flex">WEB DEV<img src={YELLOW_ARROW} alt="Go_to_web_dev_projects" /></span>
          </button>
          <button className="project-types__ui-design flex justify-center items-center"
          type="submit"
          onClick={() => setButtonValue('ui_design')}>
            <span className="flex">UI DESIGN<img src={ORANGE_ARROW} alt="Go_to_ui_design_projects" /></span>
          </button>
        </Container>
        {buttonValue === 'web_dev' ? <Projects /> : <UIDesignProjects />}
      </Container>
      <Footer />
    </>
  );
}

export default ProjectsPage;