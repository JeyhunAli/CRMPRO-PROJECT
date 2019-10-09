package testRunnerCRMPRO;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		features = "Features",
		glue = "stepDefCRMPRO",  //the path of the step definition package 
		monochrome = true,   //display the console output in a proper readable format
		 tags = "@contacts",
	format = {"pretty","html:test-outout"},
		
	dryRun = false,//to check the mapping is proper between feature file and step def file
		strict = true //it will check if any step is not defined in step definition file
		
		)


public class TestRunner extends AbstractTestNGCucumberTests {

}




