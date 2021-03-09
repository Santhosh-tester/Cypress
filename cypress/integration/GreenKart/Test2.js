/// <reference types="cypress" />

describe('Test suite 2', function() 
{

it('My first Test Case',function(){

cy
.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
.get('.search-keyword').type('ca')
.get('.products').as('productlocator')
.get('@productlocator').find('.product').each((el,index,list)=>{
    var text=el.find('h4.product-name').text()
    if(text.includes('Cashews'))
    {
        el.find('button').click()
    }
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

})
})