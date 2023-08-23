/// <reference types="cypress" />

class LoginPage {
    get #registerEmailAddress() { return cy.get('#reg_email') };
    get #registerPassword() { return cy.get('#reg_password') };
    get #registerButton() { return cy.get(':nth-child(4) > .button') };
    get errorMessage() { return cy.get('.woocommerce-error > li') };

    registrar(emailUsuario, senhaUsuario){
        this.#registerEmailAddress.type(emailUsuario);
        this.#registerPassword.type(senhaUsuario);
        this.#registerButton.click();
    }

}

module.exports = new LoginPage()