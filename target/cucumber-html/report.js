$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/LoginPage.feature");
formatter.feature({
  "name": "Login into swiggy website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has opened swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct \"\u003cPhonenumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phonenumber"
      ]
    },
    {
      "cells": [
        "9986030084"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /home/snehakrishnatec/eclipse-workspace/Cucumber_swiggy/chromedriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:197)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:121)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:116)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:290)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\n\tat test.Login_Step.setup(Login_Step.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
formatter.step({
  "name": "User has opened swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Step.user_has_opened_swiggy_website_on_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters correct \"9986030084\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Step.user_enters_correct_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});