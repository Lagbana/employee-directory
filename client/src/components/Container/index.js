/*
  Import 
    *fontawesome icon library components
    return Container JSX 
*/

import React from 'react'

function Container (props) {
  return (
    <div className={`container${props.fluid ? '-fluid' : ''}`} {...props} />
  )
}

export default Container
