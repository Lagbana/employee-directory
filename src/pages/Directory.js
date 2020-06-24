/*
 * Import
 *  - React and Component from react
 *  - Container JSX component
 *  - Table JSX component
 *  - SearchBar JSX component
 */
import React, { Component } from 'react'
import API from '../utils/API'
import Container from '../components/Container'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'

/* Directory page renders
 * - SearchBar and Table components in a container component
 */
class Directory extends Component {
  // State properties
  state = {
    employees: [],
    employeeData: [],
    isAscending: false,
    search: ''
  }

  /* 
    * When the component mounts
      - Get the array of all employees and update this.state.employees
      - Get an array of all employee values to be used for auto-suggestion through the input datalist tag 
  */
  componentDidMount () {
    this.setState({ employees: API.getRandomEmployees() })
    this.getSearchData()
  }

  /*
    - Method to sort the employee directory table
      - sort utilizes a compare function that defines how the table should be sorted (ascending or descending)
  */
  handleTableSort = event => {
    let employeeArray = this.state.employees

    const compare = (a, b) => {
      // If the table header sort icon is clicked re-assign the target value to the parent node (table header)
      let target = event.target
      if (target.localName === 'path') {
        target = target.parentNode.parentNode
      }
      // Use toUpperCase() to ignore character casing
      let propA = a[target.getAttribute('name')]
      let propB = b[target.getAttribute('name')]

      if (propA && propB && isNaN(propA) && isNaN(propB)) {
        propA = propA.toUpperCase()
        propB = propB.toUpperCase()
      }

      /*
        * Based on the isAscending boolean state property
          - set the isAscending value for the next order direction
          - compare every value in the array and set a comparison value used to sort the table, 
          - switch the comparison value when ordering in the opposite direction
          - setState and render the table to reflect the new order of employee list
      */
      let comparison = 0
      switch (this.state.isAscending) {
        case true:
          this.setState({ isAscending: false })
          if (propA > propB) {
            comparison = -1
          } else if (propA < propB) {
            comparison = 1
          }
          break
        case false:
          this.setState({ isAscending: true })
          if (propA > propB) {
            comparison = 1
          } else if (propA < propB) {
            comparison = -1
          }
          break
        default:
          comparison = 0
          break
      }
      return comparison
    }

    employeeArray.sort(compare)
    this.setState({ employees: employeeArray })
  }

  /*
    * - Function to handle state management associated with employee search
  */
  handleSearch = event => {
    event.persist()
    // Set the search state value with the input value of the search bar
    this.setState({ search: event.target.value })

    if (!this.state.search) {
      return
    }
  
    // Save the value in the target input
    let searchVal = event.target.value
    // Get the array of employees from the API 
    let employeeArray = API.getRandomEmployees()

    // Check the array of employee objects by converting each object to an array
    // then check if each value in the array contains the search value
    let searchArray = employeeArray.filter(item => {
      let itemArray = Object.values(item)
      return itemArray.some(element => {
        return element
          .toString()
          .toLowerCase()
          .includes(searchVal.toLowerCase())
      })
    })
    // If the search value exists in the array of employees
    // re-render the table with the employees that meet the search criteria
    // Otherwise re-render the pervious state data
    if (searchVal && searchArray.length > 0) {
      this.setState({ employees: searchArray })
    } else if (searchVal === '') {
      this.setState({ employees: API.getRandomEmployees() })
    }
  }

  /*
    * - Function to get the data needed for the search auto-recommendation
  */
  getSearchData = () => {
    // Get the array of employee data
    const empData = API.getRandomEmployees()
    // eslint-disable-next-line
    // reduce all employee objects into one single array of all employee data
    const employeeData = empData.reduce(
      (acc, cur) => Object.values(acc).concat(Object.values(cur)),
      []
    )
    this.setState({ employeeData: employeeData })
  }
  render () {
    return (
      <div>
        <Container className={'mx-auto'} style={{ width: '85%' }}>
          <h4 className='text-center py-3'>Employee Directory</h4>
          <SearchBar
            style={{ width: '45%' }}
            search={this.state.search}
            myhandlesearch={this.handleSearch}
            employeeData={this.state.employeeData.map((item, key) => (
              <option key={key} value={item} />
            ))}
          />
          <Table
            handleTableSort={this.handleTableSort}
            employees={this.state.employees}
            upColor={this.state.upColor}
            downColor={this.state.downColor}
          />
        </Container>
      </div>
    )
  }
}

export default Directory