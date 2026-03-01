import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Testimonials from './pages/Testimonials'
import ApplicationDetails from './pages/ApplicationDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Testimonials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/join-us" element={<ApplicationDetails />} />
      </Routes>
    </Router>
  )
}

export default App
