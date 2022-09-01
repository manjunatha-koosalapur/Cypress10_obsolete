///<reference types="cypress"/>
describe('First simple test with Cypress', function(){

    it('True should be true', function(){
        expect(true).to.equal(true)
        cy.log('Assertion Passed')
    })

    it.skip('Google search', function(){
        cy.visit('https://google.com')
        cy.get('.gLFyf').type('cypress automation')
        // cy.get('.gLFyf').type('cypress automation {enter}')
        cy.contains('Google Search').click()
        cy.wait(4000)
        cy.contains('Videos').click()
    })

})


describe('Second simple test with Cypress', function(){

    it('False should be false', function(){
        expect(false).to.equal(false)
        cy.log('Assertion Passed')
    })
})