/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { Container, Col } from 'react-grid-system';

// UI Local Components

// Images
import RIGHT_ARROW from '../../../images/Icons/right-arrow-alt.svg';

// Fake APIs
import { WEB_PROJECTS } from '../../../shared/Helpers/FakeAPIs/webProjects';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                      HERO SECTION                        */
/* -------------------------------------------------------- */
function Projects() {
  /* *********************** RENDERING ******************** */
  return (
    <Container className='project-wrapper fluid'>
      {WEB_PROJECTS?.map((project) => {
        return (
        <Container className="project-container flex justify-between items-center fluid">
          <Container className="project-content flex items-center fluid">
            <h1 className="project-content__rank">{project.rank}</h1>
            <video className="project-content__project-video"controls>
              <source src={project.video} type="video/webm"/>
            </video>
            <Container className="project-content__description fluid">
              <h1>{project.name}</h1>
              <p>{project.description} <br/>
                <span>
                  <strong>Status : </strong>{project.status} <br/>
                  <strong>Design and Dev : </strong>{project.designer} <br />
                  <strong>Technologies used : </strong>{project.technologies}
                </span>
              </p>
            </Container>
          </Container>
          <a className="project-container__github-link flex justify-center items-center" href={project.github_link} target="blank">
            <img src={RIGHT_ARROW} alt="Go to github link" />
          </a>
        </Container>
      )})}
    </Container>
  );
}

export default Projects;