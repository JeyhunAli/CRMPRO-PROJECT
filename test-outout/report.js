$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entering username and password \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is clicking on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Jeyhun01",
        "789456",
        "Jeyhun",
        "Aliyev",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entering username and password \"Jeyhun01\" and \"789456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is clicking on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entering contact details \"Jeyhun\" and \"Aliyev\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDef.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 24069873258,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 113572735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeyhun01",
      "offset": 37
    },
    {
      "val": "789456",
      "offset": 52
    }
  ],
  "location": "ContactsStepDef.user_entering_username_and_password_and(String,String)"
});
formatter.result({
  "duration": 2124362194,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDef.user_is_clicking_on_login_button()"
});
formatter.result({
  "duration": 1521682254,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 223588173,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDef.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 18371568025,
  "error_message": "java.lang.IllegalArgumentException: Must provide a location for a move action.\r\n\tat org.openqa.selenium.interactions.MoveMouseAction.\u003cinit\u003e(MoveMouseAction.java:38)\r\n\tat org.openqa.selenium.interactions.Actions.moveToElement(Actions.java:387)\r\n\tat stepDefCRMPRO.ContactsStepDef.user_moves_to_new_contact_page(ContactsStepDef.java:61)\r\n\tat ✽.Then user moves to new contact page(contacts.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeyhun",
      "offset": 31
    },
    {
      "val": "Aliyev",
      "offset": 44
    },
    {
      "val": "Manager",
      "offset": 57
    }
  ],
  "location": "ContactsStepDef.user_entering_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});