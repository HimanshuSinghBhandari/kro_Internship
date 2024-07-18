import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Front } from './pages/front'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Front />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  )
}

export default App