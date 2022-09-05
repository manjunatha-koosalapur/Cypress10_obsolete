///<reference types="cypress"/>
import {LoginPage} from "./pages/login_page2"
const loginPage = new LoginPage()

it.skip('POM demo', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.enterUserName()
    loginPage.enterPassword()
    loginPage.clickLogin()
})