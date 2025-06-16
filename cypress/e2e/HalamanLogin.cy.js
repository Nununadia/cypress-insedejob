import Login from "../support/ObjectModel/objectLoginPage/LoginPage.js";
 
const detailLoginPage = new Login;

describe('Fitur login', () => {
  it('berhasil Login', () => {
    cy.visit('https://www.saucedemo.com/')
   detailLoginPage.Login('standard_user', 'secret_sauce')
  })
})
