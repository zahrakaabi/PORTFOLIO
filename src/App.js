/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { BrowserRouter, Routes, Route} from "react-router-dom";

// Local Components
import IndexPage from './pages/index';
import ProjectsPage from './pages/projectsPage';

/* -------------------------------------------------------- */
/*                          APP                             */
/* -------------------------------------------------------- */
function App() {
  /* *********************** RENDERING ******************** */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
