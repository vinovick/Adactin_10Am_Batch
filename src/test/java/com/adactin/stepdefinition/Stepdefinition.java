package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.Login_Page;
import com.adactin.property.File_Reader_Manager;
import com.adactin.runner.Runner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class Stepdefinition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	@Before
	public void beforeHooks(Scenario scenario) {
		String name = scenario.getName();
		System.out.println("Scenario Name : " + name);

	}

	@After
	public void afterHooks(Scenario scenario) throws Throwable {
		String status = scenario.getStatus();
		System.out.println("Scenario status : " + status);

		if (scenario.isFailed()) {
			screenshot("C:\\Users\\user pc\\eclipse-workspace\\Adactin_Project1\\Screenshot\\failedcase.png");
		}
	}

	Login_Page lp = new Login_Page(driver);

	@Given("^User want to launch the application$")
	public void user_want_to_launch_the_application() throws Throwable {
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		getUrl(url);
	}

	@When("^User enter the valid \"([^\"]*)\" username in the textbox$")
	public void user_enter_the_valid_username_in_the_textbox(String arg1) throws Throwable {
		inputValueElement(lp.getUsername(), arg1);
	}

	@When("^User enter the valid \"([^\"]*)\" password in the textbox$")
	public void user_enter_the_valid_password_in_the_textbox(String arg1) throws Throwable {
		inputValueElement(lp.getPassword(), arg1);
	}

	@Then("^User validate the username and password$")
	public void user_validate_the_username_and_password() throws Throwable {
		clickOnElement(lp.getLogin());
	}
}
