describe('API Automation Test Suite', () => {
  it('GET all employees', () => {
    cy.request({
    method: 'GET',
    url: "https://qa-practice.herokuapp.com/api/v1/employees"
    }).as('getAllEmployeesRequest')
    cy.get('@getAllEmployeesRequest').then(Response=> {
      expect(Response.status).to.eq(200)
      cy.log(JSON.stringify(Response.body))
    })
  })

  it('POST create employee', () => {
    cy.request({
    method: 'POST',
    url: "https://qa-practice.herokuapp.com/api/v1/employees",
    body: {
      "dob": "1988-01-01",
      "email": "apitest@email.com",
      "firstName": "firstName",
      "id": 2468,
      "lastName": "lastName"
    }
    }).as('postEmployeeRequest')
    cy.get('@postEmployeeRequest').then(Response=> {
      expect(Response.status).to.eq(201)
      // cy.log(JSON.stringify(Response.body))
    })
  })
})