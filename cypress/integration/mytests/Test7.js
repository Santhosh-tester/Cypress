/// <reference types="Cypress" />

describe('My seventh Test Suite', function() 
{

it('My FirstTest case',function() {

  cy.visit(Cypress.env('customenvvariable')+'/AutomationPractice/')

//for child window with href attribute
cy.get('#opentab').then(function(e1)
{
  const url=e1.prop('href')
  cy.log(url)
  cy.visit(url)
})

}  )

}  )