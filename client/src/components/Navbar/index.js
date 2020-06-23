import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*
  Import 
    *fontawesome icon library components
    return Navbar JSX 

*/
function Navbar () {
  return (
    <nav
      className='navbar navbar-expand-lg'
      style={{ backgroundColor: '#40E0D0', textAlign: 'center' }}
    >
      <Link
        className='navbar-brand mx-auto'
        to='/'
        style={{ color: '#ffffff', display: 'block', textAlign: 'center' }}
      >
        <h1>
          <span className='px-3'>
            <FontAwesomeIcon icon='layer-group' />
          </span>
          Stackify
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar
