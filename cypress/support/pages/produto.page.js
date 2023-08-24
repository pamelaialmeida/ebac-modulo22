/// <reference types="cypress" />

class ProdutoPage {
    get #tamanho() { return cy.get(':nth-child(1) > .value > .variable-items-wrapper > li') };
    get #cor() { return cy.get(':nth-child(2) > .value > .variable-items-wrapper > li')};
    get #botaoComprar() { return cy.get('.single_add_to_cart_button') };
    get mensagem() { return cy.get('.woocommerce-notices-wrapper > .woocommerce-message') };
    get #botaoVerCarrinho() { return cy.get('.woocommerce-message > .button') };

    adicionarProduto(){
        this.#tamanho.first().click();
        this.#cor.last().click();
        this.#botaoComprar.click();
    }

    irParaOCarrinho(){
        this.#botaoVerCarrinho.click()
    }
}

module.exports = new ProdutoPage();