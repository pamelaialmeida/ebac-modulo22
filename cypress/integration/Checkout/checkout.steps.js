/// <reference types="cypress" />

import { es } from "@faker-js/faker";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { en } from "faker/lib/locales";
const dadosUsuario = require('../../fixtures/dadosUsuario.json')
const { homePage, loginPage, minhaContaPage, checkoutPage, orderPage } = require('../../support/pages')

describe('Testes da funcionalidade de checkout utilizando AppActions', () => {

    let nome;
    let sobrenome;
    let pais;
    let endereco;
    let cidade;
    let estado;
    let cep;
    let telefone;
    let email;

    Given('that I am on Checkout page', () => {
        cy.login(dadosUsuario.email, dadosUsuario.senha);
        cy.adicionarProduto('S', 'Blue', 1);
    });

    When('I fill in all checkout fields with valid data', () => {
        nome = dadosUsuario.nome;
        sobrenome = dadosUsuario.sobrenome;
        pais = dadosUsuario.pais;
        endereco = dadosUsuario.endereco;
        cidade = dadosUsuario.cidade;
        estado = dadosUsuario.estado;
        cep = dadosUsuario.cep;
        telefone = dadosUsuario.telefone;
        email = dadosUsuario.email;
    });

    When('I click on Finalizar Compra button', () => {
        checkoutPage.finalizarCompra(nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email);
    });

    Then('the order page should be displayed with the message {string}', (message) => {
        orderPage.tituloPagina.should('contain', 'Pedido recebido');
        orderPage.mensagemSucesso.should('contain', message);
    });

    When('I do not fill in the mandatory fields in checkout', () => {
        nome = " ";
        sobrenome = " ";
        pais = dadosUsuario.pais;
        endereco = " ";
        cidade = " ";
        estado = dadosUsuario.estado;
        cep = " ";
        telefone = " ";
        email = " ";
    });

    Then('the error messages are displayed', () => {
        checkoutPage.mensagensErro.should('be.visible');
    });


});