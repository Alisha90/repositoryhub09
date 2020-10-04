Feature: To signup for elearning
@Signup
Scenario Outline: Signup to elearning
Given I am able to navigate to the homepage
When I click on Sign up button
And I enter the First name as "<firstname>"
And I enter the Last name as "<lastname>"
And I enter the email as "<email>"
And I enter the username as "<username>"
And I enter the password as "<password>"
And I enter the confirm password as "<conpwd>"
Then I should see the message as "An e-mail has been sent to remind you of your login and password."

Examples:
|firstname  |lastname  |email                |username  |password |conpwd    |
|alisha4     |alisha4    |alisha4.med@gmail.com |alisha4    |password |password  |
