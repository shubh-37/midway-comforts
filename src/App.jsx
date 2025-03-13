import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import CaseStudiesPage from "./pages/CaseStudiesPage"
import BeforeAfterPage from "./pages/BeforeAfterPage"
import Projects from "./pages/Projects"
import AboutPage from "./pages/AboutPage"
import Layout from "./components/Layout"
import CalculatorPage from "./pages/CalculatorPage"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="before-after" element={<BeforeAfterPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
