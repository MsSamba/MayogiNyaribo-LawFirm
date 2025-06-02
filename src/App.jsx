import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PracticeAreasPage from "./pages/PracticeAreasPage"
import AboutPage from "./pages/AboutPage"
import CareersPage from "./pages/CareersPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
