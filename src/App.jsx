import React from 'react'
import Nav from './components/navbar/Nav'
import Cardl from './components/card/Cardl'
import Background from './components/background/Background'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Background />} />
      {/* Add other routes if necessary */}
    </Routes>
  </Router>
   
  )
}

export default App
