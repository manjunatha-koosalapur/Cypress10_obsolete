///<reference types="cypress"/>
describe.skip1('Device tests', function(){

    it('720p', function(){
        cy.viewport(1280, 720)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

    it('1080p', function(){
        cy.viewport(1980, 1080)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

    it('iPhone X', function(){
        cy.viewport('iphone-x')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

    it('iPad  Mini', function(){
        cy.viewport('ipad-mini')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

    it('Macbook 16', function(){
        cy.viewport('macbook-16')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

    it('Samsung S10', function(){
        cy.viewport('samsung-s10')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(4000)
    })

})