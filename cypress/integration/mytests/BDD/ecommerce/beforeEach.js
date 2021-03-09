//loads before every test case or scenario
beforeEach(function()
{
    cy.fixture('example').then(function(data){
        this.data=data //global variable declared and initialised
    })
})