/// <reference types="cypress" />

class OrderPage {
    get tituloPagina() { return cy.get('.page-title') }; 
    get mensagemSucesso() { return cy.get('.woocommerce-notice') };
}

module.exports = new OrderPage();