package com.adactin.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.adactin.baseclass.BaseClass;
import com.adactin.property.File_Reader_Manager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", glue = "com\\adactin\\stepdefinition", monochrome = true, dryRun = false, strict = true, plugin = {
		"pretty", "com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html", "html:Report/HTML_Report",
		"json:Report1/CucumberJSON_Report.json" })

public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void getBrowser() throws Throwable {
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getBrowser();
		driver = BaseClass.getDriver(browser);
	}
}
