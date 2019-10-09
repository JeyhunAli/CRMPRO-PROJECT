//package stepDefCRMPRO;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
////import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
////import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class StepDefinitionCRMPRO {
//
//	WebDriver Driver;
//
//	@Given("^user alredy on web page of the crmpro$")
//	public void user_alredy_on_web_page_of_the_crmpro() throws Throwable {
//		System.setProperty("webdriver.chrome.driver", "./Browsers/chromedriver.exe");
//		Driver = new ChromeDriver();
//		Driver.get("https://www.crmpro.com/");	  
//		Driver.manage().window().maximize();
//		Driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//	}
//
//	@When("^title of the web page is free crm$")
//	public void title_of_the_web_page_is_free_crm() throws Throwable {
//		String title = Driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
//
//	}
//	
//	   @Then("^User entering username and password$") 
//	 public void user_entering_username_and_password() throws Throwable {
//	  Driver.findElement(By.name("username")).sendKeys("Jeyhun01");
//	  Driver.findElement(By.name("password")).sendKeys("789456"); 
//	   }
//	   
//		
//		@Then("^user enters \"(.*)\" and \"(.*)\"$")
//		public void user_enters_and(String username, String password) throws Throwable {
//			Driver.findElement(By.name("username")).sendKeys("username");
//			Driver.findElement(By.name("password")).sendKeys("password");
//
//
//	//  }
//
//	@Then("^user clicks on login button$")
//	public void user_clicks_on_login_button() throws Throwable {
//		/*
//		 * WebElement loginbutton =
//		 * Driver.findElement(By.xpath("//input[@class=\"btn btn-small\"]"));
//		 * JavascriptExecutor js = (JavascriptExecutor)Driver;
//		 * js.executeScript("arquments[0].click();", loginbutton);
//		 */
//		Driver.findElement(By.xpath("//input[@class=\"btn btn-small\"]")).click();
//	}
//
//	@Then("^user is on the home page$")
//	public void user_is_on_the_home_page() throws Throwable {
//		String title = Driver.getTitle();
//		System.out.println("my home page title is: " +title);
//		Assert.assertEquals("CRMPRO", title);
//	}
//
//
//}
