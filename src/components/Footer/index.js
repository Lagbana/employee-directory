/*
  Import 
    *fontawesome icon library components
    return Footer JSX 
*/

import React from 'react'

function Footer () {
  return (
    <footer className='footer'>
      <div className='text-center py-3' style={{backgroundColor: "#E8E8E8", width: "100%", position: "fixed", bottom: 0}}>
        <span>Copyright &copy; 2020 Stackify Inc.</span>
      </div>
    </footer>
  )
}

export default Footer
