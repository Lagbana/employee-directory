// import React, { useState, useEffect}from 'react'
import React from 'react'

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar (props) {
  // Destructure props object
  const {search, myhandlesearch, style, employeeData } = props
  return (
    <form className='search'>
      <div className='form-group'>
        <label htmlFor='language'>
          <h5>Find Employee:</h5>
        </label>
        <input
          value={search}
          onChange={myhandlesearch}
          name='term'
          list='data'
          type='text'
          className='form-control'
          placeholder='Type in an employee name, department, or employee number to begin'
          id='term'
          style={style}
        />
        <datalist id='data'>{employeeData}</datalist>
      </div>
    </form>
  )
}

export default SearchBar
