package com.edmunds.devportal;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MainPagesStepdefs {

    private String baseUrl;
    protected WebDriver driver;

    @Before
    public void setUp() {
        Assert.assertNotNull(System.getenv("SITE_URL"), "SITE_URL environment variable is missing");
        baseUrl = System.getenv("SITE_URL");
        
        DesiredCapabilities  dCaps = new DesiredCapabilities();
        dCaps.setJavascriptEnabled(true);
        dCaps.setCapability("takesScreenshot", false);
        
        driver = new PhantomJSDriver(dCaps);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @Given("I have opened (.*) page")
    public void I_have_opened_page(String page) {
        driver.get(getUiUrl(page));
    }

    @Then("the page should have (.*) in title")
    public void Ensure_the_fund_transferis_complete(String title) {
        Assert.assertEquals(driver.getTitle(), title);
    }

    @After
    public void tearDown() {
        driver.quit();
    }
    
    public String getUiUrl(String page) {
        return baseUrl + page;
    }

}
