$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/HYperscale/Workspace/com/src/test/resources/Login/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Features",
  "description": "This feature includes scenario that would validate the following\r\n1. Login as Admin\r\n2. Login as Linda.anderson\r\n3. Login with Negative Data",
  "id": "login-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7158750400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am able to navigate onto the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.i_am_able_to_navigate_onto_the_login_page()"
});
formatter.result({
  "duration": 5626107900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login with Negative Data",
  "description": "",
  "id": "login-features;login-with-negative-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am able to navigate onto the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I Enter the username as \"alisha\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Enter the password as \"alisha\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see an Error message as \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_am_able_to_navigate_onto_the_login_page()"
});
formatter.result({
  "duration": 660125200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha",
      "offset": 25
    }
  ],
  "location": "steps.i_Enter_the_username_as(String)"
});
formatter.result({
  "duration": 206498500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alisha",
      "offset": 25
    }
  ],
  "location": "steps.i_Enter_the_password_as(String)"
});
formatter.result({
  "duration": 180003800,
  "status": "passed"
});
formatter.match({
  "location": "steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 3974298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 34
    }
  ],
  "location": "steps.i_should_see_an_Error_message_as(String)"
});
formatter.result({
  "duration": 74623400,
  "status": "passed"
});
formatter.after({
  "duration": 645915500,
  "status": "passed"
});
});