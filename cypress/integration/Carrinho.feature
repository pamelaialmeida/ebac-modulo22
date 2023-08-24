Feature: Cart

    Background: 
        Given that I am on Cart page 

    Scenario: Should update the cart when changing the quantity of the product added to the cart
        When I change the quantity of the product added to the cart to 2
        Then the total amounts of the cart are updated 
        And the message "Carrinho atualizado." is displayed after updating the cart

    Scenario: Should remove the item from the cart
        When I click on Remove button of the item
        Then the item is removed from the cart
        And the message "Seu carrinho está vazio." is displayed after removing the item