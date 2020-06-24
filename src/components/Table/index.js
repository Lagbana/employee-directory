import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Table (props) {
  const { handleTableSort } = props
  const employeeRows = props.employees.map((item, index) => (
    <tr key={index}>
      <td>
        <img src={item.avatar} alt={`${item.firstname} ${item.lastname}`} />
      </td>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.jobTitle}</td>
      <td>{item.department}</td>
      <td>{item.employeeNumber}</td>
      <td>{item.email}</td>
    </tr>
  ))
  return (
    <table className='table table-hover table-responsive'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Avatar</th>
          {/* onClick={() => orderHandler('first') */}

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
