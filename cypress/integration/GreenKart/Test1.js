/// <reference types="cypress" />

describe('Test suite 1', function() 
{

it('My first Test Case',function(){

cy
.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
.get('.search-keyword').type('ca')
.get('.product:visible').should('have.length',4)
.get('.products').as('productlocator')
//Parent child chaining
.get('@productlocator').find('.product').should('have.length',4)
.eq(1).contains('ADD TO CART').click().then(function(){
    console.log('sfc')
})
//looping of array
.get('@productlocator').find('.product').each((el,index,list)=>{
    var text=el.find('h4.product-name').text()
    if(text.includes('Cashews'))
    {
        el.find('button').click()
    }
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
//print in cypress
cy.get('.brand').then(function(logoelement){  //promise resolved using then and resolved output stored
         cy.log(logoelement.text()) //in logo element, yhen we get text //text is jquery
})
//Not work
//const logo= cy.get('.brand')
//cy.log(logo.text())(video 21)
} )


}  )