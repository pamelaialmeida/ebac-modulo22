Feature: Checkout

    Background: 
        Given that I am on Checkout page 

    Scenario: Should create the order when all fields in checkout are filled with valid data
        When I fill in all checkout fields with valid data
        And I click on Finalizar Compra button
        Then the order page should be displayed with the message "Obrigado. Seu pedido foi recebido."

    Scenario: Should not create the order when the mandatory fields in checkout are not filled
        When I do not fill in the mandatory fields in checkout
        And I click on Finalizar Compra button
        Then the error messages are displayed 



  

  