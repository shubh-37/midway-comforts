import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import BeforeAfterPage from './pages/BeforeAfterPage';
import CaseStudies from './pages/CaseStudies';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import CalculatorPage from './pages/CalculatorPage';
import Products from './pages/Products';
import ACGuidePage from './pages/AboutACs';
import ProjectsPage from './pages/Projects';
import CareersPage from './pages/Career';
import GalleryGrid from './pages/Gallery';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<Products />} />
          <Route path="ac-guide" element={<ACGuidePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="career" element={<CareersPage />} />
          <Route path="gallery" element={<GalleryGrid />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
