$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRMPROLOGIN.feature");
formatter.feature({
  "line": 1,
  "name": "CRMPRO functionality",
  "description": "",
  "id": "crmpro-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "scenario of the CRMPRO and login",
  "description": "",
  "id": "crmpro-functionality;scenario-of-the-crmpro-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user alredy on web page of the crmpro",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the web page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User entering username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionCRMPRO.user_alredy_on_web_page_of_the_crmpro()"
});
formatter.result({
  "duration": 360511916,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefCRMPRO.StepDefinitionCRMPRO.user_alredy_on_web_page_of_the_crmpro(StepDefinitionCRMPRO.java:22)\r\n\tat ✽.Given user alredy on web page of the crmpro(CRMPROLOGIN.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionCRMPRO.title_of_the_web_page_is_free_crm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionCRMPRO.user_entering_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionCRMPRO.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionCRMPRO.user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});