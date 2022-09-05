///<reference types="cypress"/>
import {LoginPage} from "./pages/login_page3"
const loginPage = new LoginPage()

describes.skip('Login Tests', function(){
    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it.skip('Login with valid username and password', function(){
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
        })

    it('Login with invalid username', function(){
        loginPage.enterUserName('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
        // cy.get('.oxd-userdropdown-name').click()
    })

    it('Login with invalid password', function(){
        loginPage.enterUserName('Admin123')
        loginPage.enterPassword('admin')
        loginPage.clickLogin()
        cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
        // cy.get('.oxd-userdropdown-name').click()
    })
})