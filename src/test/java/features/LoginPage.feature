Feature: Login into swiggy website
 
  Scenario Outline: Positive scenario to test login functinonality
    Given User has opened swiggy website on Chrome Browser
    When User enters correct "<Phonenumber>"
    Then user should be able to login successfully

 

 

 

    Examples: 
      | Phonenumber |
      |  9986030084 |