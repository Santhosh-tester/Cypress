/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
.get('#alertbtn').click()
.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

.get('#opentab').invoke('removeAttr','target').click()

.url().should('include','rahulshettyacademy')

.go('back')

}  )

}  )