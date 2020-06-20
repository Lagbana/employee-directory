// Import faker module
import Faker from 'faker'

/*
  Method uses the faker library
  Generates random data for 10 employees
  faker.seed is used to ensure consistent data is displayed on component re-load
  additional parameters added to get more predictable results
*/
export default {
  getRandomEmployees: function () {
    Faker.seed(101)
    let employeesArray = []
    for (let i = 0; i < 10; i++) {
      const user = {
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        jobTitle: Faker.name.jobTitle(),
        department: Faker.commerce.department(),
        employeeNumber: Faker.random.number({ min: 1000, max: 1999 }),
        avatar: Faker.internet.avatar()
      }
      let email = Faker.internet.email(
        `${user.firstname}`,
        `_${user.lastname}`,
        'stackify.ca'
      )
      user.email = email
      employeesArray.push(user)
    }
    return employeesArray
  }
}
