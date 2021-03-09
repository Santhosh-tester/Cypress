class HomePage
{

 getEditBox()
 {
   return cy.get('input[name="name"]:nth-child(2)')
 }

 getTwoWayDataBinding()
 {
     return cy.get(':nth-child(4) > .ng-untouched')
 }

 getGender()
 {
    return cy.get('select')
 }

 getEntreupreneurRB()
 {
    return cy.get('#inlineRadio3')
 }

 getShopTab()
 {
    return cy.get(':nth-child(2) > .nav-link')
 }

}
//Deafault is scope of where homepage will be available (here this project)
export default HomePage;