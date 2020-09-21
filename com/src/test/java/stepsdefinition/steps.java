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

	@Given("^I am able to navigate onto the login page$")
	public void i_am_able_to_navigate_onto_the_login_page() throws Throwable {
		        driver.get("http://opensource-demo.orangehrmlive.com/"); 
	}

	@When("^I Enter the username as \"([^\"]*)\"$")
	public void i_Enter_the_username_as(String string) throws Throwable {
		driver.findElement(By.id("txtUsername")).sendKeys(string);
	}

	@When("^I Enter the password as \"([^\"]*)\"$")
	public void i_Enter_the_password_as(String string) throws Throwable {
		driver.findElement(By.id("txtPassword")).sendKeys(string);
	}

	@When("^I click on the login button$")
	public void i_click_on_the_login_button() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();
		Thread.sleep(3000);
	}

	@Then("^I should see the usernsme as \"([^\"]*)\"$")
	public void i_should_see_the_usernsme_as(String string) throws Throwable {
		String expected = driver.findElement(By.id("welcome")).getText();
		   Assert.assertEquals(expected, string);
		   driver.findElement(By.id("welcome")).click();
		   Thread.sleep(3000);
		   driver.findElement(By.xpath("//*[@id='welcome-menu']/ul/li[3]/a")).click();
		   Thread.sleep(3000);
		}

	@Then("^I should see an Error message as \"([^\"]*)\"$")
	public void i_should_see_an_Error_message_as(String string) throws Throwable {
		 String getErrortext=driver.findElement(By.xpath("//span[@id='spanMessage']")).getText();
	        Assert.assertEquals("Valid Login",getErrortext,"Invalid credentials");
	    
	}
}
