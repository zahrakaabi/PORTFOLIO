/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Hidden } from 'react-grid-system';

// Local Components
import SectionTitle from '../Section-title';

// Images
import NEXT_ARROW from '../../images/Icons/next-arrow.svg';
import WATCH_GO_PROJECT from '../../images/Selected-work-section/watchNgo.png';
import MOVIE_HYPE_PROJECT from '../../images/Selected-work-section/moviehype.png';
import OBSESSION_PROJECT from '../../images/Selected-work-section/obsession.png';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*               Selected projects section                  */
/* -------------------------------------------------------- */
function SelectedProjects() {
  /* *********************** RENDERING ******************** */
  return (
    <Container className='projects-wrapper flex flex-columns justify-between fluid'>
        <SectionTitle title="SELECTED PROJECTS" />
        <Container className='projects-container fluid'>
            <div className='project-item flex justify-between items-center'>
                <h1 className='project-title'>01/ WATCH&GO</h1>
                <Hidden xs sm md>
                    <Container className="marquee_project flex justify-between items-center fluid">
                        <h1 className='marquee_project__marquee-item'>WATCH&GO - WATCH&GO - WATCH&GO</h1>
                        <img src={WATCH_GO_PROJECT} alt="wartch-go_project_name" />
                    </Container>
                </Hidden>
                <a href="/#" traget="blank"><img src={NEXT_ARROW} alt="Next-arrow" /></a>
            </div>
            <div className='project-item flex justify-between items-center'>
                <h1 className='project-title'>02/ MOVIE-HYPE</h1>
                <Hidden xs sm md>
                    <Container className="marquee_project flex justify-between items-center fluid">
                        <h1 className='marquee_project__marquee-item'>MOVIE-HYPE - MOVIE-HYPE - MOVIE-HYPE</h1>
                        <img src={MOVIE_HYPE_PROJECT} alt="wartch-go_project_name" />
                    </Container>
                </Hidden>
                <a href="https://github.com/zahrakaabi13/Movie-application-usig-react-js" traget="blank"><img src={NEXT_ARROW} alt="Next-arrow" /></a>
            </div>
            <div className='project-item flex justify-between items-center'>
                <h1 className='project-title'>03/ OBSESSION</h1>
                <Hidden xs sm md>
                    <Container className="marquee_project flex justify-between items-center fluid">
                        <h1 className='marquee_project__marquee-item'>OBSESSION - OBSESSION - OBSESSION</h1>
                        <img src={OBSESSION_PROJECT} alt="wartch-go_project_name" />
                    </Container>
                </Hidden>
                <a href="https://github.com/zahrakaabi13/Chef-d-oeuvre" traget="blank"><img src={NEXT_ARROW} alt="Next-arrow" /></a>
            </div>
        </Container>
    </Container>
  );
}

export default SelectedProjects;
