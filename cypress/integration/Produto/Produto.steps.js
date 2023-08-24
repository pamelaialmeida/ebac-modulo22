/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { homePage, produtosPage, produtoPage, carrinhoPage} = require('../../support/pages');
const dadosUsuario = require('../../fixtures/dadosUsuario.json');
const responseAddProduto = require('../../fixtures/responseAddProduto.json');

describe('Teste da funcionalidade de adicionar produto ao carrinho usando Intercept', () => {

    Given('that I am on Product page', () => {
        cy.login(dadosUsuario.email, dadosUsuario.senha);
        homePage.acessarPaginaDeProdutos();
        produtosPage.buscarProduto('Abominable Hoodie');
    });

    When('I add an item to the cart intercepting the request', () => {
        // Interceptando chamada para que ao invés de incluir um único item, inclua 2
        cy.intercept({
            method: 'POST',
            url: '?wc-ajax=get_refreshed_fragments'
        }, requisicao => {
            requisicao.reply({
                statusCode: 200,
                body: {
                    "fragments": responseAddProduto.fragments
                }
            })
        })

        produtoPage.adicionarProduto();
    });

    Then('two items are added to the cart', () => {
        carrinhoPage.quantidadeCarrinhoTopo.should('contain', 2);        
    });

    Then('the message {string} is displayed', (message) => {
        produtoPage.mensagem.should('contain', message);
    });

})