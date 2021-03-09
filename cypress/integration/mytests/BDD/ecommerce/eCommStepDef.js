/// <reference types="cypress" />
import HomePage from '../../../../support/pageObject/HomePage'
import ProductPage from '../../../../support/pageObject/Products'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

//npx cypress run --spec cypress/integration/mytests/BDD/*.feature --headed --browser chrome for all feature files
//npx cypress-tags run -e TAGS="@Smoke"  --headed --browser chrome for running specific tags
//add cucumber report options in package.json ->output.json
//use html report plugin /create js file (pass the details of output.json)
//run js file

const homePage= new HomePage()
const productPage=new ProductPage()
let name // variable initialization

//Instead of function() we can use ()=> (fatpipeline or anonymous fn when fn has no name)
Given('I open Ecommerce page',()=>
{
    cy.visit(Cypress.env('customenvvariable')+'/angularpractice/')
})

//When I add items to cart
//Anonymous fn cannot be used here since we get data from hook of mocha(since no suport)
When('I add items to cart',function()
{
    homePage.getShopTab().click()
this.data.productName.forEach(element => { //or forEach(function(element){logic})
    cy.selectProduct(element)
})

productPage.checkOutButton().click()

})

//And Validate the total prices
And('Validate the total prices',()=>
{
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

})

//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou',()=>
{
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

//When I fill the form details
When('I fill the form details',function(dataTable)
{       //initialized globally at top(name)
        name=dataTable.rawTable[1][0]
        //.rawTable converts datatable into multidimensional array.[1] 1st row [0] 0th column
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        //only tag name
        homePage.getGender().select(dataTable.rawTable[1][1])
})

//Then validate the forms behaviour
Then('validate the forms behaviour',function()
{
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    //.pause()-to pause the test at runtime (used for debugging)
    //.debug()-gives detail of what it is chained
    //or use prop method in test 7
    homePage.getEntreupreneurRB().should('be.disabled')
    Cypress.config('defaultCommandTimeout',10000)

})

//And select the Shop Page
And('select the Shop Page',()=>
{
    homePage.getShopTab().click()
})
