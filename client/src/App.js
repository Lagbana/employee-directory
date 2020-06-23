// Import dependencies and components
import React from 'react'
import './components/FontAwesomeIcons'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Directory from './pages/Directory'
import Footer from './components/Footer'

/*
 Return
    *Navbar JSX component
    *Directory page component
      - made of Container, SearchBar, and Table components
      - handles state management and lifecycle events
    *Footer JSX component
*/
function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Directory />
        <Footer />
      </div>
    </Router>
  )
}

export default App
