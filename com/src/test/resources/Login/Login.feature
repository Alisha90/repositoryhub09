Feature: Login Features
This feature includes scenario that would validate the following
1. Login as Admin
2. Login as Linda.anderson
3. Login with Negative Data

Background:
Given I am able to navigate onto the login page

#Scenario: Login as Admin
#Given I am able to navigate onto the login page
#When I Enter the username as "Admin"
#And I Enter the password as "admin123"
#And I click on the login button
#Then I should see the usernsme as "Welcome Test"

#Scenario: Login as Linda.anderson
#Given I am able to navigate onto the login page
#When I Enter the username as "linda.anderson"
#And I Enter the password as "linda.anderson"
#And I click on the login button
#Then I should see the usernsme as "Welcome Test"

Scenario Outline: Login with different user
When I Enter the username as "<user>"
And I Enter the password as "<pwd>"
And I click on the login button
Then I should see the usernsme as "<name>"


Examples:
|user          |pwd            |name         |
|Admin         |admin123       |Welcome Linda|
|linda.anderson|linda.anderson |Welcome Linda|

@negative
Scenario: Login with Negative Data
Given I am able to navigate onto the login page
When I Enter the username as "alisha"
And I Enter the password as "alisha"
And I click on the login button
Then I should see an Error message as "Invalid credentials"
