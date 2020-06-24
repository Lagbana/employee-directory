import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Table(props) {
  // Destructure props object
  const { handleTableSort } = props

  // Create table rows and pre-populate the rows the employee data
  const employeeRows = props.employees.map((item, index) => {
    const {avatar, firstname, lastname, jobTitle, department, employeeNumber, email} = item
    
    return (
      <tr key={index}>
        <td>
          <img src={avatar} alt={`${firstname} ${lastname}`} />
        </td>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{jobTitle}</td>
        <td>{department}</td>
        <td>{employeeNumber}</td>
        <td>{email}</td>
      </tr>
    )
  })
  return (
    <table className='table table-hover table-responsive'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Avatar</th>
          <th
            scope='col'
            onClick={() => handleTableSort('firstname')}
            name={'firstname'}
          >
            Firstname <FontAwesomeIcon icon='long-arrow-alt-up' />{' '}
            <FontAwesomeIcon icon='long-arrow-alt-down' />
          </th>
          <th
            scope='col'
            onClick={() => handleTableSort('lastname')}
            name={'lastname'}
          >
            Lastname <FontAwesomeIcon icon='long-arrow-alt-up' />{' '}
            <FontAwesomeIcon icon='long-arrow-alt-down' />
          </th>
          <th
            scope='col'
            onClick={() => handleTableSort('jobTitle')}
            name={'jobTitle'}
          >
            Job Title <FontAwesomeIcon icon='long-arrow-alt-up' />{' '}
            <FontAwesomeIcon icon='long-arrow-alt-down' />
          </th>
          <th
            scope='col'
            onClick={() => handleTableSort('department')}
            name={'department'}
          >
            Department <FontAwesomeIcon icon='long-arrow-alt-up' />{' '}
            <FontAwesomeIcon icon='long-arrow-alt-down' />
          </th>
          <th
            scope='col'
            onClick={() => handleTableSort('employeeNumber')}
            name={'employeeNumber'}
          >
            Employee Number <FontAwesomeIcon icon='long-arrow-alt-up' />{' '}
            <FontAwesomeIcon icon='long-arrow-alt-down' />
          </th>
          <th scope='col'>Email </th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  )
}

export default Table
