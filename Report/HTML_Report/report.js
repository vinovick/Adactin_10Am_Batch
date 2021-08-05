$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "User want to book the hotel room",
  "description": "",
  "id": "user-want-to-book-the-hotel-room",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User want to login the application",
  "description": "",
  "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the valid \"\u003cUsername\u003e\" username in the textbox",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the valid \"\u003cPassword\u003e\" password in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 17,
      "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;1"
    },
    {
      "cells": [
        "AAA",
        "111"
      ],
      "line": 18,
      "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;2"
    },
    {
      "cells": [
        "BBB",
        "222"
      ],
      "line": 19,
      "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;3"
    },
    {
      "cells": [
        "vinovicky",
        "Jan@2020"
      ],
      "line": 20,
      "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42539600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the valid \"vinovicky\" username in the textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"Jan@2020\" password in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 2962936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 173393800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 199355100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 697545400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User want to login the application",
  "description": "",
  "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the valid \"AAA\" username in the textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the valid \"111\" password in the textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 462045900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 101159700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 109382400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 285110800,
  "status": "passed"
});
formatter.after({
  "duration": 327000,
  "status": "passed"
});
formatter.before({
  "duration": 534400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the valid \"vinovicky\" username in the textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"Jan@2020\" password in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 210503800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 140172800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 104556100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 421359800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User want to login the application",
  "description": "",
  "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the valid \"BBB\" username in the textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the valid \"222\" password in the textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 223847900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 107977200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 88217300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 284137700,
  "status": "passed"
});
formatter.after({
  "duration": 460500,
  "status": "passed"
});
formatter.before({
  "duration": 557000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the valid \"vinovicky\" username in the textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid \"Jan@2020\" password in the textbox",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 210903900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 123443300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 123427800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 417260900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User want to login the application",
  "description": "",
  "id": "user-want-to-book-the-hotel-room;user-want-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User want to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enter the valid \"vinovicky\" username in the textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter the valid \"Jan@2020\" password in the textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_launch_the_application()"
});
formatter.result({
  "duration": 333471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_username_in_the_textbox(String)"
});
formatter.result({
  "duration": 112755200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_the_valid_password_in_the_textbox(String)"
});
formatter.result({
  "duration": 159835400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 481499000,
  "status": "passed"
});
formatter.after({
  "duration": 102700,
  "status": "passed"
});
});