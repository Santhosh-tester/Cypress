/// <reference types="Cypress" />

describe('My sixth Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//shows hidden elements of parent
//.get('div.mouse-hover-content').invoke('show') commented to demonstrate hidden element click
.contains('Top').click({force:true})
.url().should('include','top')

}  )

}  )