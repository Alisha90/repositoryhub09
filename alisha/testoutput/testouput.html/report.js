$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/HYperscale/Workspace/alisha/src/test/resources/Signup/Signup.feature");
formatter.feature({
  "line": 1,
  "name": "To signup for elearning",
  "description": "",
  "id": "to-signup-for-elearning",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Signup to elearning",
  "description": "",
  "id": "to-signup-for-elearning;signup-to-elearning",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Signup"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am able to navigate to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter the First name as \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the Last name as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the username as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the confirm password as \"\u003cconpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the message as \"An e-mail has been sent to remind you of your login and password.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "to-signup-for-elearning;signup-to-elearning;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "password",
        "conpwd"
      ],
      "line": 15,
      "id": "to-signup-for-elearning;signup-to-elearning;;1"
    },
    {
      "cells": [
        "alisha3",
        "alisha3",
        "alisha3.med@gmail.com",
        "alisha3",
        "password",
        "password"
      ],
      "line": 16,
      "id": "to-signup-for-elearning;signup-to-elearning;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7707572700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Signup to elearning",
  "description": "",
  "id": "to-signup-for-elearning;signup-to-elearning;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Signup"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am able to navigate to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter the First name as \"alisha3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the Last name as \"alisha3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the email as \"alisha3.med@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the username as \"alisha3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the password as \"password\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the confirm password as \"password\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the message as \"An e-mail has been sent to remind you of your login and password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_am_able_to_navigate_to_the_homepage()"
});
formatter.result({
  "duration": 5893879301,
  "status": "passed"
});
formatter.match({
  "location": "steps.i_click_on_Sign_up_button()"
});
formatter.result({
  "duration": 2394625900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha3",
      "offset": 27
    }
  ],
  "location": "steps.i_enter_the_First_name_as(String)"
});
formatter.result({
  "duration": 305261999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha3",
      "offset": 26
    }
  ],
  "location": "steps.i_enter_the_Last_name_as(String)"
});
formatter.result({
  "duration": 338732800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha3.med@gmail.com",
      "offset": 22
    }
  ],
  "location": "steps.i_enter_the_email_as(String)"
});
formatter.result({
  "duration": 442242700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha3",
      "offset": 25
    }
  ],
  "location": "steps.i_enter_the_username_as(String)"
});
formatter.result({
  "duration": 253581101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "steps.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 276705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 33
    }
  ],
  "location": "steps.i_enter_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 3809875899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An e-mail has been sent to remind you of your login and password.",
      "offset": 29
    }
  ],
  "location": "steps.i_should_see_the_message_as(String)"
});
formatter.result({
  "duration": 71817899,
  "status": "passed"
});
formatter.after({
  "duration": 222704699,
  "status": "passed"
});
});