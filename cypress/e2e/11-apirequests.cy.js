describe('API Request Test Suite', () => {
    it('GET request', () => {
        cy.request('GET', 'http://localhost:3000/users').then(response => {
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.duration)
            cy.log(response.headers)
            cy.log(response.body)

            expect(response.status).to.be.eq(200)
            expect(response.duration).to.be.below(20000)
            expect(response.body[1].firstName).to.be.eq('Manjunatha')
            expect(response.body[1].subjectId).to.be.eq(2)
        })

    })

    it('GET request with Parameters', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/users',
            qs: {"id":2}
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('POST request', () => {
        cy.request('POST', 'http://localhost:3000/users',
            {"firstName": "Sarah2","lastName": "Sycha2","subjectId": "1","id": 16})
            .then(response => {
                expect(response.status).to.eq(201)
        })
    })

    it('PUT request', () => {
        cy.request('PUT', 'http://localhost:3000/users/16',
            {"firstName": "Sarah2","lastName": "testPUT","subjectId": "1","id": 16 })
    })


    it.skip('DELEET request', () => {
        cy.request('DELETE', 'http://localhost:3000/users/17')
    })

    it('Secured API request1', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/users',
            auth: {bearer: 'asd1234asd1234asd1234'}
         
        })
    })

    it('Secured API request2', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/users',
            headers: {Authorization: 'asd1234asd1234asd1234'}
         
        })
    })

})
