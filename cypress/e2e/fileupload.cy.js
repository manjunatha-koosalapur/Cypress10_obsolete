///<reference types="cypress"/>


it ('File upload', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#myfile').attachFile('example.json')
    cy.get('#myfile').attachFile('login_test.cy.js.mp4')
    

})


it ('File download', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})
