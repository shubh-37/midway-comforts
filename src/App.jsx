import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import BeforeAfterPage from './pages/BeforeAfterPage';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import CalculatorPage from './pages/CalculatorPage';
import Products from './pages/Products';
import ACGuidePage from './pages/AboutACs';
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
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
