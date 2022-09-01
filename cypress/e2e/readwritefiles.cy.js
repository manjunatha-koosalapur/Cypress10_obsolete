///<reference types="cypress"/>
// const cypress = require("cypress")

before(function(){
    cy.fixture('example.json').as('test_data')
})

it ('Read file using Fixture()', function(){
    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

})

it('Write file using writeFile()', function(){
    cy.writeFile('./cypress/fixtures/sampleFile.txt', 'Hello, Im Manjunatha\n')
    cy.writeFile('./cypress/fixtures/sampleFile.txt', 'Running cypress tests', {flag: 'a+'})

})