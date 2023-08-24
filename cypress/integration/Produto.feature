Feature: Product

    Background: 
        Given that I am on Product page 

    Scenario: Should add the item to the cart
        When I add an item to the cart intercepting the request
        Then two items are added to the cart
        And the message "“Abominable Hoodie” foi adicionado no seu carrinho." is displayed