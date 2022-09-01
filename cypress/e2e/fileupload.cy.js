///<reference types="cypress"/>


it ('File upload', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#myfile').attachFile('example.json')
    cy.get('#myfile').attachFile('login_test.cy.js.mp4')
    

})
