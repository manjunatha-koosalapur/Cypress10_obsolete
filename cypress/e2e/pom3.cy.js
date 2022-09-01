///<reference types="cypress"/>
import {LoginPage} from "./pages/login_page3"
const loginPage = new LoginPage()

it('POM demo', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
})