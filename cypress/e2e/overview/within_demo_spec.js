describe('Within command Demo', ()=>{
    it('should learn within commands details', ()=>{
        cy.visit('https://www.letskodeit.com/practice');
      
        cy.get('button')

        cy.get('#open-window-example-div').within(()=>{
            cy.get('button')
        }).should('have.id','open-window-example-div')
        
        
    })
})