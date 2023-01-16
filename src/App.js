/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route} from "react-router-dom";

// Local Components
import IndexPage from './pages/index';
import ProjectsPage from './pages/projectsPage';

/* -------------------------------------------------------- */
/*                          APP                             */
/* -------------------------------------------------------- */
function App() {
  const helmetContext = {};

  /* *********************** RENDERING ******************** */
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
