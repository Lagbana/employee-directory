// import React, { useState, useEffect}from 'react'
import React from 'react'

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar (props) {
  // const [search, setSearch] = useState('')

  return (
    <form className='search'>
      <div className='form-group'>
        <label htmlFor='language'>
          <h5>Find Employee:</h5>
        </label>
        <input
          value={props.search}
          onChange={props.myhandlesearch}
          name='term'
          list='data'
          type='text'
          className='form-control'
          placeholder='Type in an employee name, department, or employee number to begin'
          id='term'
          style={props.style}
        />
        <datalist id='data'>
          {props.employeeData}
        </datalist>
      </div>
    </form>
  )
}

export default SearchBar
