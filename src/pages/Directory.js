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
      - context parameter is the name of the table header that is to be sorted. It is used as an object key in the array of employee objects
  */
  handleTableSort = context => {
  
    let employeeArray = this.state.employees

    // compare function compares one value to the next value in the array
    // and assigns comparison value of + 1 or - 1 based on their alphabetical order or numeric size
    // a and b parameters are the two objects being compared with each array iteration
    const compare = (a, b) => {

      // Get the required table column (and Array) using context as object key
      let propA = a[context]
      let propB = b[context]

      // If table column data is alphabetical, convert data to uppercase to ignore character casing
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