package stepsdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class steps {
	WebDriver driver;
	
	 @Before
	    public void beforetest()
	     {
	    	 System.setProperty("webdriver.chrome.driver", "C://Webdriver//chromedriver.exe");
	 		driver = new ChromeDriver();
	 		driver.manage().window().maximize();		 
	     }
	     
	     @After
	     public void aftertest()
	     {
	    	 driver.close();
	     }

	@Given("^I am able to navigate to the homepage$")
	public void i_am_able_to_navigate_to_the_homepage() throws Throwable {
		driver.get("http://elearningm1.upskills.in/");
	}

	@When("^I click on Sign up button$")
	public void i_click_on_Sign_up_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='login-block']/div/ul/li[1]/a")).click();
	}

	@When("^I enter the First name as \"([^\"]*)\"$")
	public void i_enter_the_First_name_as(String string) throws Throwable {
		driver.findElement(By.id("registration_firstname")).sendKeys(string);
	}

	@When("^I enter the Last name as \"([^\"]*)\"$")
	public void i_enter_the_Last_name_as(String string) throws Throwable {
		driver.findElement(By.id("registration_lastname")).sendKeys(string);
	}

	@When("^I enter the email as \"([^\"]*)\"$")
	public void i_enter_the_email_as(String string) throws Throwable {
		driver.findElement(By.id("registration_email")).sendKeys(string);    
	}

	@When("^I enter the username as \"([^\"]*)\"$")
	public void i_enter_the_username_as(String string) throws Throwable {
		driver.findElement(By.id("username")).sendKeys(string);
	}

	@When("^I enter the password as \"([^\"]*)\"$")
	public void i_enter_the_password_as(String string) throws Throwable {
		driver.findElement(By.id("pass1")).sendKeys(string);
	}

	@When("^I enter the confirm password as \"([^\"]*)\"$")
	public void i_enter_the_confirm_password_as(String string) throws Throwable {
		driver.findElement(By.id("pass2")).sendKeys(string);
		driver.findElement(By.id("registration_submit")).click();
		}

	@Then("^I should see the message as \"([^\"]*)\"$")
	public void i_should_see_the_message_as(String string) throws Throwable {
		String getErrortext=driver.findElement(By.xpath("//*[@id='cm-content']/div/div[2]/div/p[2]")).getText();
        Assert.assertEquals("Valid Login",getErrortext,"An e-mail has been sent to remind you of your login and password.");
    
	}


}
