///<reference types="cypress"/>

it('Google search', function(){
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('cypress automation')
    // cy.get('.gLFyf').type('cypress automation {enter}')
    cy.contains('Google Search').click()
    cy.wait(4000)
    cy.contains('Videos').click()
})