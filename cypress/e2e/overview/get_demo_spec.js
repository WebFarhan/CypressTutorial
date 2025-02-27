describe('Get Method And CSS Examples', ()=>{
    it('should learn get() method and some CSS examples', ()=>{
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')

        //Id
        cy.get('#name')

        cy.get('.inputs')

        cy.get('[placeholder="Enter Your Name"]')

        //Class value
        cy.get('[class="inputs displayed-class"]')

        cy.get('input[id="name"]:visible')

        cy.get('input[id="name"][placeholder="Enter Your Name"]')

    })

})