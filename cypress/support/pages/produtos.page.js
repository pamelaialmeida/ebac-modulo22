/// <reference types="cypress" />

class ProdutosPage {
    get #searchField() { return cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search') };
    get #searchButton() { return cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search') };

    buscarProduto(produto){
        this.#searchField.clear().type(produto);
        this.#searchButton.click();
    }
}

module.exports = new ProdutosPage();