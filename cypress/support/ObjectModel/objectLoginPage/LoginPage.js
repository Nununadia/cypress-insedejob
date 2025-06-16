class Login{
    //Object Model
    kolomUsername = '[data-test="username"]';
    kolomPassword = '[data-test="password"]';
    tombolLogin = '[data-test="login-button"]';

    //StepDefination
    login(username, password) {
    cy.get(this.kolomUsername).type(username)
    cy.get(this.kolomPassword).type(password)
    cy.get(this.tombolLogin).click();
   }
}
export default Login();