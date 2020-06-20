import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Table (props) {
  const employeeRows = props.employees.map(item => (
    <tr>
      <td><img src={item.avatar} alt={`${item.firstname} ${item.lastname}`}/></td>
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
          <th scope='col' onClick={props.handleTableSort} name={'firstname'}>Firstname <FontAwesomeIcon icon='sort' /> </th>
          <th scope='col' onClick={props.handleTableSort} name={'lastname'}>Lastname <FontAwesomeIcon icon='sort' /></th>
          <th scope='col' onClick={props.handleTableSort} name={'jobTitle'}>Job Title <FontAwesomeIcon icon='sort' /></th>
          <th scope='col' onClick={props.handleTableSort} name={'department'}>Department <FontAwesomeIcon icon='sort' /></th>
          <th scope='col' onClick={props.handleTableSort} name={'employeeNumber'}>Employee Number <FontAwesomeIcon icon='sort' /></th>
          <th scope='col'>Email </th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  )
}

export default Table
