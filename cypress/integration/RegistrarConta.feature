Feature: Register Account

    Background: 
        Given that I am on Register Account page 

    Scenario: Should create a new account when all fields are filled with valid data
        When I fill in all fields with valid data
        And I click on Regiter button
        Then My Account page should be displayed

    Scenario: Should not create a new account when the email field is not filled
        When I do not fill in the email field
        And I click on Regiter button
        Then the message "Erro: Informe um endereço de e-mail válido." is displayed 

    Scenario: Should not create a new account when providing data from an existent account
        When I provide data from an existent account
        And I click on Regiter button
        Then the message "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login." is displayed 

      