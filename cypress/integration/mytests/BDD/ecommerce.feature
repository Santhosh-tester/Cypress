Feature: Ecommerce end to end validation

    Regression done on rahulshetty application

    @Regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name|gender|
    |Cucumber|Male|
    Then validate the forms behaviour
    And select the Shop Page

