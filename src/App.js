/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, useScreenClass } from 'react-grid-system';

// Local Components
import Header from './shared/PageHeader';
import Hero from './pages-components/Hero-section';
import CustomCursor from './pages-components/Custom-cursor';
import About from './pages-components/About-section';
import SelectedProjects from './pages-components/Selected-projects-section';
import Services from './pages-components/Services-section';
import ContactMe from './pages-components/Contact-me-section';
import Footer from './shared/PageFooter';

// Styles
import './shared/Styles/global.scss';
import './shared/Styles/typography.scss';
import './pages-styles/App.scss';

/* -------------------------------------------------------- */
/*                          APP                             */
/* -------------------------------------------------------- */
function App() {
  const screenClass = useScreenClass();
  const IS_MOBILE = ['xs', 'sm'].includes(screenClass);

  /* *********************** RENDERING ******************** */
  return (
    <>
      <Container className={`centered ${IS_MOBILE ? '' : 'fluid'}`}>
        <Container className='hero-section flex flex-columns justify-between fluid'>
          <Header />
          <Hero />
          <div className='srcoll-down flex justify-between w-max'>
              <h3>BASED IN TUNISIA</h3>
              <h3>SCROLL DOWN</h3>
          </div>
          <CustomCursor/>
        </Container>
        <About />
        <SelectedProjects />
        <Services />
        <ContactMe />
      </Container>
      <Footer />
    </>
  );
}

export default App;
