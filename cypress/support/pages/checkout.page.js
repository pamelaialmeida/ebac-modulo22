/// <reference types="cypress" />

class CheckoutPage {
    get mensagensErro() { return cy.get('.woocommerce-error') }; 

    get #nome() { return cy.get('#billing_first_name') };
    get #sobrenome() { return cy.get('#billing_last_name') };
    get #pais() { return cy.get('#select2-billing_country-container') };
    get #endereco() { return cy.get('#billing_address_1') };
    get #cidade() { return cy.get('#billing_city') };
    get #estado() { return cy.get('#select2-billing_state-container') };
    get #cep() { return cy.get('#billing_postcode') };
    get #telefone() { return cy.get('#billing_phone') };
    get #email() { return cy.get('#billing_email') };
    get #termos() { return cy.get('#terms') };

    get #botaoFinalizarCompra() { return cy.get('#place_order') };

    finalizarCompra(nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email){
        this.#nome.clear().type(nome);
        this.#sobrenome.clear().type(sobrenome);
        this.#pais.type(pais + '{enter}');
        this.#endereco.clear().type(endereco);
        this.#cidade.clear().type(cidade);
        this.#estado.type(estado + '{enter}');
        this.#cep.clear().type(cep);
        this.#telefone.clear().type(telefone);
        this.#email.clear().type(email);
        this.#termos.click();
        this.#botaoFinalizarCompra.click();
    }
}

module.exports = new CheckoutPage();