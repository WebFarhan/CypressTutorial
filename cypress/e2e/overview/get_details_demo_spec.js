describe('Get Method Details', ()=>{
    it('should learn get() method details', ()=>{
        cy.visit('https://www.letskodeit.com/practice');
      
        cy.get('input',{log:true});

        cy.get('input',{timeout:12000});

        
    })
})