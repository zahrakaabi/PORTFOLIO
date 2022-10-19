/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, useScreenClass } from 'react-grid-system';

// Local Components
import Header from '../shared/PageHeader';
import Hero from '../pages-components/Hero-section';
import CustomCursor from '../pages-components/Custom-cursor';
import About from '../pages-components/About-section';
import SelectedProjects from '../pages-components/Selected-projects-section';
import Services from '../pages-components/Services-section';
import ContactMe from '../pages-components/Contact-me-section';
import Footer from '../shared/PageFooter';

// Styles
import '../shared/Styles/global.scss';
import '../shared/Styles/typography.scss';
import '../pages-styles/IndexPage.scss';

/* -------------------------------------------------------- */
/*                     INDEX PAGE                           */
/* -------------------------------------------------------- */
function IndexPage() {
  const screenClass = useScreenClass();
  const IS_MOBILE = ['xs', 'sm'].includes(screenClass);

  // Hide Intro Content after delay 
  setTimeout(() => {
    const INTRO_CONTENT = document.getElementById('intro-content');
    INTRO_CONTENT.style.display = 'none';
  }, 8350);

  /* *********************** RENDERING ******************** */
  return (
    <>
      <Container id="intro-content" className="intro flex flex-columns items-center justify-center max-w fluid">
        <h1>こんにちは, ザハラです</h1>
        <h1>OHAYO, i'am Zahra</h1>
        <Container className='words text-center fluid'>
          <span> UI Designer &#9996;</span>
          <span>  Web Integrator &#9996;</span>
          <span> Junior front-end developer &#9996;</span>
        </Container>
      </Container>
      <Container className={`centered ${IS_MOBILE ? '' : 'fluid'}`}>
        <Container id="hero" className='hero-section flex flex-columns justify-between fluid'>
          <Header />
          <Hero />
          <div className='srcoll-down flex justify-between w-max'>
              <h4>BASED IN TUNISIA</h4>
              <h4>SCROLL DOWN</h4>
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

export default IndexPage;