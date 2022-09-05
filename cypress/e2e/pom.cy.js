///<reference types="cypress"/>
import {LoginPage} from "./pages/login_page"
const loginPage = new LoginPage()

it.skip1('POM demo', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')    
    // cy.get('.oxd-button').click()
    loginPage.enterUserName()
    loginPage.enterPassword()
    loginPage.clickLogin()
})