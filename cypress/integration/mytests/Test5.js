/// <reference types="Cypress" />

describe('My fifth Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//taking all rows and second column data alone
.get('tr td:nth-child(2)').each((el,index,list)=>{

  const text=el.text()
  if(text.includes('Python'))
  {
      //text is jquery so resolve promise
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
    {
      var pricetext=price.text()
      expect(pricetext).to.equal('25')
    })
  }

}  )

}  )

}  )