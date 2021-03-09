/// <reference types="cypress" />
import HomePage from '../../support/pageObject/HomePage'
import ProductPage from '../../support/pageObject/Products'
//class name from filepath
describe('Test suite 8', function() 
{

    before(function(){
     cy.fixture('example').then(function(data){
         this.data=data //global variable declared and initialised
     })
    })


it('My first Test Case',function(){
const homePage= new HomePage()
const productPage=new ProductPage()
//concatenation
cy.visit(Cypress.env('customenvvariable')+'/angularpractice/')
homePage.getEditBox().type(this.data.name)
//only tag name
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
//.pause()-to pause the test at runtime (used for debugging)
//.debug()-gives detail of what it is chained
//or use prop method in test 7
homePage.getEntreupreneurRB().should('be.disabled')
//only applicable to this spec file from after this step only
Cypress.config('defaultCommandTimeout',10000)
homePage.getShopTab().click()
this.data.productName.forEach(element => { //or forEach(function(element){logic})
    cy.selectProduct(element)
})

productPage.checkOutButton().click()
var sum=0
cy.get('tr td:nth-child(4) strong').each((el,index,list)=>
{
    //non cypress steps (js)
    const amount=el.text()
    //split where space comes
    var res=amount.split(" ")
    res=res[1].trim()
    sum=sum+Number(res)
}).then(function()
{
    //js is asynchronous before loop directly prints 0 , so we resolve promise here to wait for loop
    cy.log(sum)
})
.get('h3 strong').then(function(element)
{
    const amount=element.text()
    //split where space comes
    var res=amount.split(" ")
    var total=res[1].trim()
    expect(Number(total)).to.equal(sum)
})
cy.contains('Checkout').click()
.get('#country').type('india')
.get('.suggestions > ul > li > a').click()
.get('#checkbox2').click({force:true})
.get('input[type="submit"]').click()
//.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
//exact match not found due to /n* before and after text in code
.get('.alert').then(function(element)
{
    const actualText=element.text()
    expect(actualText.includes('Success')).to.be.true
})

})
})