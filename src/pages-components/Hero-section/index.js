/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container } from 'react-grid-system';

// UI Local Components

// Images
import GET_IN_TOUCH from '../../images/Hero-section/get-in-touch.png';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                      HERO SECTION                        */
/* -------------------------------------------------------- */
function Hero() {
  /* *********************** RENDERING ******************** */
  return (
    <Container className='hero-wrapper flex flex-columns justify-around fluid'>
        <Container className="hero-wrapper__content fluid">
            <h3>ウェブ開発者</h3>
            <h1>WEB DEVELOPMENT from scratch / Custom Code / Design</h1>
            <a href="/projects"><button>VIEW PROJECTS</button></a>
        </Container>

        <img src={GET_IN_TOUCH} alt="" />
    </Container>
  );
}

export default Hero;