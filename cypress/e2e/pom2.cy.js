///<reference types="cypress"/>
import {LoginPage} from "./pages/login_page2"
const loginPage = new LoginPage()

it.skip1('POM demo', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.enterUserName()
    loginPage.enterPassword()
    loginPage.clickLogin()
})