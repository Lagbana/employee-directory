import React, { Component } from 'react'
import API from '../utils/API'
import Container from '../components/Container'
import Table from '../components/Table'
// import FilterTable from '../components/FilterTable'

class Directory extends Component {
  state = {
    employees: []
  }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount () {
    this.setState({ employees: API.getRandomEmployees() })
  }

  handleTableSort = event => {
    //   this.setState({ search: event.target.value })
    let employeeArray = this.state.employees
    function compare (a, b) {
      // Use toUpperCase() to ignore character casing
      let propA = a[event.target.getAttribute('name')]
      let propB = b[event.target.getAttribute('name')]
        if (isNaN(propA) && isNaN(propB)) {
            propA = propA.toUpperCase()
            propB = propB.toUpperCase()
      }

      let comparison = 0
      if (propA > propB) {
        comparison = 1
      } else if (propA < propB) {
        comparison = -1
      }
      return comparison
    }

    employeeArray.sort(compare)
    this.setState({ employees: employeeArray })
  }

  //   handleFormSubmit = event => {
  //     event.preventDefault()
  //     API.getDogsOfBreed(this.state.search)
  //       .then(res => {
  //         if (res.data.status === 'error') {
  //           throw new Error(res.data.message)
  //         }
  //         this.setState({ results: res.data.message, error: '' })
  //       })
  //       .catch(err => this.setState({ error: err.message }))
  //   }
  render () {
    return (
      <div>
        <Container className={'mx-auto'} style={{ width: '80%' }}>
          <h4 className='text-center py-3'>Employee Directory</h4>

          <Table
            // handleFormSubmit={this.handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            handleTableSort={this.handleTableSort}
            employees={this.state.employees}
          />
        </Container>
      </div>
    )
  }
}

export default Directory
