// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "./pages/login.page";
import MinhaContaPage from "./pages/minhaConta.page";

Cypress.Commands.add('criarConta', (email, senha) => {
    LoginPage.registrar(email, senha);
    MinhaContaPage.sair();
});

Cypress.Commands.add('login', (email, senha) => {
    const dadosDeLogin = new FormData();
    dadosDeLogin.append('username', email);
    dadosDeLogin.append('password', senha);
    dadosDeLogin.append('woocommerce-login-nonce', '2b6f94ce0d');
    dadosDeLogin.append('_wp_http_referer', '/minha-conta/');
    dadosDeLogin.append('login', 'Login');

    cy.request({
        url: '/minha-conta/',
        method: 'POST',
        body: dadosDeLogin
    })

});

Cypress.Commands.add('adicionarProduto', (tamanho, cor, quantidade) => {
    const dadosDoProduto = new FormData();
    dadosDoProduto.append('attribute_size', tamanho);
    dadosDoProduto.append('attribute_color', cor);
    dadosDoProduto.append('quantity', quantidade);
    dadosDoProduto.append('add-to-cart', 2559);
    dadosDoProduto.append('product_id', 2559);
    dadosDoProduto.append('variation_id', 2574);

    cy.request({
        url: '/product/abominable-hoodie/',
        method: 'POST',
        body: dadosDoProduto
    })

    cy.visit('/checkout');

});


