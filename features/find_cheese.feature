Feature: check browser search function

Scenario: Finding some cheese
  Given I am on the Baidu search page
  When I search for "Cheese!"
  Then the page title should start with "cheese"