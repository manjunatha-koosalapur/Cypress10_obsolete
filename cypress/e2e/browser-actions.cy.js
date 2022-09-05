///<reference types="cypress"/>
describe.skip('Browser actions', () => {
    it('should load correct url', ()=>{
        cy.visit('https://example.com/', {timeout: 6000})
    })
    
    it('should check correct url', ()=>{
        cy.url().should('include','example.com')
    })

    it('should wait for 4 seconds', ()=>{
        // cy.wait(4000)
    })

    it('should pause the execution', ()=>{
        // cy.pause()
    })

    it('should check correct element on the page', ()=>{
        cy.get('h1').should('be.visible')

    })
    
    it('should load books website', ()=>{
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include','/books.')
    })

    it('should click on Travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
        
    })

    it('should display correct number of books', ()=>{
        cy.get('.product_pod').its('length').should('eq',11)
                
    })

    it('should display correct price of Poetry book-Olio', ()=>{
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()        
        cy.get('.price_color').contains('£23.88')        
        cy.log('Before browser reload')
        cy.reload()
        cy.log('After browser reload')
    })


});