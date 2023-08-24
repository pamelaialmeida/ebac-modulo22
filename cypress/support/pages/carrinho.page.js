/// <reference types="cypress" />

class CarrinhoPage {
    get #quantidadeItem() {return cy.get('.quantity > .input-text') };
    get totalItem() { return cy.get('.product-subtotal > .woocommerce-Price-amount > bdi') };
    get subtotal() { return cy.get('.cart-subtotal > td > .woocommerce-Price-amount > bdi') };
    get total() { return cy.get('strong > .woocommerce-Price-amount > bdi') };
    get quantidadeCarrinhoTopo() { return cy.get('.dropdown-toggle > .mini-cart-items') };
    get valorCarrinhoTopo() { return cy.get('.sub-title > .woocommerce-Price-amount > bdi')};
    get mensagem() { return cy.get('.woocommerce-message') };
    get mensagemExclusao() { return cy.get('.cart-empty')};
    get #botaoRemover() { return cy.get('.remove > .fa') };

    alterarQuantidadeProduto(quantidade){
      this.#quantidadeItem.clear().type(quantidade + '{enter}');
    }

    removerItemDoCarrinho(){
        this.#botaoRemover.click();
    }

}

module.exports = new CarrinhoPage();