/// <reference types="cypress" />

class MinhaContaPage {
    get tituloPagina() { return cy.get('.page-title') }
    get #opcaoSair() { return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a') }

    sair(){
        this.#opcaoSair.click()
    }
}

module.exports = new MinhaContaPage()