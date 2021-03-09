/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My eighth Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//regex using * after href
.frameLoaded('#courses-iframe').iframe().find("a[href*='mentorship']").eq(0).click()
//can be continued in prev line also without cy.iframe
//regex acts like includes for attributes
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


}  )

}  )