/// <reference types="cypress" />

describe('Test suite 3', function() 
{

it('My first Test Case',function(){
//chechbox
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1').uncheck().should('not.be.checked')
.get('input[type="checkbox"]').click({multiple:true}).click({multiple:true}).check().uncheck()
.check(['option2','option3'])
//static dropdown(pass value or name in select)
.get('select').select('option2').should('have.value','option2')
//Dynamic dropdowns
.get('#autocomplete').type('ind')
.get('.ui-menu-item div').each((el,index,list)=>{
   if(el.text()==='India')
   {
       el.click()
   }
})
.get('#autocomplete').should('have.value','India') // to validate dynamic dropdown
//visible invisible
.get('#displayed-text').should('be.visible')
.get('#hide-textbox').click()
.get('#displayed-text').should('not.be.visible')
.get('#show-textbox').click()
.get('#displayed-text').should('be.visible')
//radio button same as checkbox(use click and check)
.get('[value="radio2"]').check().should('be.checked')
})
})
