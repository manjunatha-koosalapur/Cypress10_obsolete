///<reference types="cypress"/>

it.skip1('Assertion demo', function(){
    cy.visit('https://example.cypress.io')
    // cy.contains('Querying').click()
    cy.contains('get').click()
    cy.get('.banner > .container').should('contain', 'Examples of querying for DOM elements in Cypress')
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        // .should('be.disabled')
        .should('be.enabled')
    
    expect(true).to.be.true
    // expect(true).to.be.false

    assert.equal(4, 4, 'Not equal')
    // assert.strictEqual(4, '4', 'Not equal')


})