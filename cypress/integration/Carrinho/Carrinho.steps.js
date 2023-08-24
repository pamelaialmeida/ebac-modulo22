/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const dadosUsuario = require('../../fixtures/dadosUsuario.json');
const responseAltProduto = require('../../fixtures/responseAltProduto.json');
const responseDelProduto = require('../../fixtures/responseDelProduto.json');
const { homePage, produtosPage, produtoPage, carrinhoPage } = require('../../support/pages');

describe('Testes das funcionalidades de atualizar e remover item do carrinho utilizando Intercept', () => {

    Given('that I am on Cart page', () => {
        cy.login(dadosUsuario.email, dadosUsuario.senha);
        homePage.acessarPaginaDeProdutos();
        produtosPage.buscarProduto('Abominable Hoodie');
        produtoPage.adicionarProduto();
        produtoPage.irParaOCarrinho();
    });

    When('I change the quantity of the product added to the cart to {int}', (quantidade) => {    
        carrinhoPage.alterarQuantidadeProduto(quantidade);  
        
        // Interceptando e alterando valor apresentado para o carrinho no topo da página
        //Deixei dessa forma somente para fim de teste
        cy.intercept({
            method: 'POST',
            url: '?wc-ajax=get_refreshed_fragments'
        }, requisicao => {
            requisicao.reply({
                statusCode: 200,
                body: {
                    "fragments": responseAltProduto.fragments
                }
            })
        }).as("update")

        cy.wait("@update")
                 
    });

    When('I click on Remove button of the item', () => {
        carrinhoPage.removerItemDoCarrinho();

        // Interceptando requisição de atualização do carrinho no topo da página e mantendo valor de 10,00
        // Fiz isso para fim de teste, para validar que realmente interceptou
        cy.intercept({
            method: 'POST',
            url: '?wc-ajax=get_refreshed_fragments'
        }, requisicao => {
            requisicao.reply({
                statusCode: 200,
                body: {
                    "fragments": responseDelProduto.fragments
                }
            })
        }).as("delete")

        cy.wait("@delete")
        
    });

    Then('the total amounts of the cart are updated', () => {
        carrinhoPage.totalItem.should('contain', 138.00);
        carrinhoPage.subtotal.should('contain', 138.00);
        carrinhoPage.total.should('contain', 138.00);

        // Validando que é apresentado no carrinho no topo da página os valores apresentados na resposta do intercept, que são diferentes dos apresentados na página
        // Deixei dessa forma somente para fim de teste
        carrinhoPage.quantidadeCarrinhoTopo.should('contain', 3);
        carrinhoPage.valorCarrinhoTopo.should('contain', 207.00);
    });

    Then('the item is removed from the cart', () => {
        carrinhoPage.quantidadeCarrinhoTopo.should('contain', 0);        
        carrinhoPage.mensagem.should('contain', '“Abominable Hoodie” removido. Desfazer?');

        // Validando que o valor do carrinho no topo da página é o setado pela interceptação da requisição
        carrinhoPage.valorCarrinhoTopo.should('contain', 10.00);
    });

    Then('the message {string} is displayed after updating the cart', (mensagem) => {
        carrinhoPage.mensagem.should('contain', mensagem);
    });

    Then('the message {string} is displayed after removing the item', (mensagem) => {
        carrinhoPage.mensagemExclusao.should('contain', mensagem);
    });

})