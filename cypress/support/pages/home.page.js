/// <reference types="cypress" />

class HomePage {
    get #minhaConta() { return cy.get('.icon-user-unfollow') }; 

    acessarMinhaConta(){
        this.#minhaConta.click();
    }

    acessarPaginaDeProdutos(){
        cy.visit('produtos');
    };
}

module.exports = new HomePage();