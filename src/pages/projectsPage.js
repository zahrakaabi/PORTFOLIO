/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, useScreenClass } from 'react-grid-system';

// Local Components
import Header from '../shared/PageHeader';
import SectionTitle from '../pages-components/Section-title';
import Projects from '../pages-components/pages-projects/projects';
import Footer from '../shared/PageFooter';

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

  /* *********************** RENDERING ******************** */
  return (
    <>
      <Container className={`page-projects centered ${IS_MOBILE ? '' : 'fluid'}`}>
        <Header />
        <SectionTitle title="PROJECTS" />
        <Projects />
      </Container>
      <Footer />
    </>
  );
}

export default ProjectsPage;