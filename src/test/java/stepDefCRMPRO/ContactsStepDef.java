package stepDefCRMPRO;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactsStepDef {

	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./Browsers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.crmpro.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	
	   @When("^title of login page is Free CRM$") public void 
	  title_of_login_page_is_Free_CRM() throws Throwable { String title = 
	  driver.getTitle(); System.out.println(title); Assert. 
	  assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support." , title); 
	   }
	   
	   @Then("^user entering username and password \"([^\"]*)\" and \"([^\"]*)\"$")
	   public void user_entering_username_and_password_and(String username, String password) {
		driver.findElement(By.name("username")).sendKeys("username");
		driver.findElement(By.name("password")).sendKeys("password");

	}

	@Then("^user is clicking on login button$")
	public void user_is_clicking_on_login_button() {
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();

	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		String title = driver.getTitle();
		System.out.println("my home page title is: " + title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);

	}

	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() throws Throwable {
		Actions action = new Actions(driver);
		WebElement webE = driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")); 
		action.moveToElement(webE).moveToElement(driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")))
				.click().build().perform();

	}
	@Then("^user entering contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_entering_contact_details_and_and(String firstname, String lastname, String position) {
	  
		driver.findElement(By.id("//input[@id=\"first_name\"]")).sendKeys("firstname");
		driver.findElement(By.id("//input[@id=\"surname\"]")).sendKeys("lastname");
		driver.findElement(By.id("//input[@id=\"company_position\"]")).sendKeys("position");
		driver.findElement(By.xpath(
				"//body/table/tbody/tr/td/table/tbody/tr/td/fieldset[@class='fieldset']/form[@id='contactForm']/table/tbody/tr/td/input[2]"))
				.click();

	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();

	}
}
