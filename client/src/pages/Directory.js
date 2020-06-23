import React, { Component } from 'react'
import API from '../utils/API'
import Container from '../components/Container'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'

class Directory extends Component {
  state = {
    employees: [],
    employeeData: [],
    isAscending: false,
    search: ''
  }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount () {
    this.setState({ employees: API.getRandomEmployees() })
    this.getSearchData()
  }

  componentDidUpdate () {}
  handleTableSort = event => {
    let employeeArray = this.state.employees
    const compare = (a, b) => {
      // Use toUpperCase() to ignore character casing
      let propA = a[event.target.getAttribute('name')]
      let propB = b[event.target.getAttribute('name')]

      if (propA && propB && isNaN(propA) && isNaN(propB)) {
        propA = propA.toUpperCase()
        propB = propB.toUpperCase()
      }

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

  handleSearch = event => {
    this.setState({ search: event.target.value })
    if (!this.state.search) {
      return
    }
    let searchVal = this.state.search
    // remove below line
    let employeeArray = API.getRandomEmployees()

    let searchArray = employeeArray.filter(item => {
      let itemArray = Object.values(item)
      return itemArray.some(element => {
        return element
          .toString()
          .toLowerCase()
          .includes(searchVal.toLowerCase())
      })
    })

    if (searchVal && searchArray.length > 0) {
      this.setState({ employees: searchArray })
    } else if (searchVal === '') {
      this.setState({ employees: API.getRandomEmployees() })
    }
  }

  getSearchData = () => {
    const empData = API.getRandomEmployees()
    // eslint-disable-next-line
    const employeeData = empData.reduce((acc, cur) => Object.values(acc).concat(Object.values(cur)), [])
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
          />
        </Container>
      </div>
    )
  }
}

export default Directory
