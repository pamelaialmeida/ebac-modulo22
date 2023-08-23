/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { homePage, loginPage, minhaContaPage } = require('../../support/pages')
const { faker } = require('@faker-js/faker')


describe('Testes da funcionalidade de Registrar Conta utilizando Page Objects', () => {

    let email;
    let senha;

    Given('that I am on Register Account page', () => {
        cy.visit('/');
        homePage.acessarMinhaConta();
    });

    When('I fill in all fields with valid data', () => {
        email = faker.internet.email();
        senha = faker.internet.password({length: 10});
    });

    When('I click on Regiter button', () => {
        loginPage.registrar(email, senha);
    });

    When('I do not fill in the email field', () => {
        email = ' ';
        senha = faker.internet.password({length: 10});
    });

    When('I provide data from an existent account', () => {
        email = faker.internet.email();
        senha = faker.internet.password({length: 10});
    
        cy.criarConta(email, senha);
    });

    Then('My Account page should be displayed', () => {
        minhaContaPage.tituloPagina.should('have.text', 'Minha conta');
    });

    Then('the message {string} is displayed', (message) => {
        loginPage.errorMessage.should('contain', message);
    });
  
})