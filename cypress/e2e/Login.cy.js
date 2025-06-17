describe('TS01 - cek fitur login', () => {

  it('Berhasil login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('suep')
    cy.get('[data-test="lastName"]').type('wayan')
    cy.get('[data-test="postalCode"]').type('1234')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
  })
})