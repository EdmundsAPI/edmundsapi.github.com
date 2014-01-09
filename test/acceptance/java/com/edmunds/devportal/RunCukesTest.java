package com.edmunds.devportal;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(format = "json:target/cucumber-report.json")
public class RunCukesTest extends AbstractTestNGCucumberTests {

    private static String baseUrl;
    private static WebDriver driver;

    @Before
    public void setUp() {
        Assert.assertNotNull(System.getProperty("siteUrl"), "'siteUrl' system property is missing");
        baseUrl = System.getProperty("siteUrl");
        
        if (System.getProperty("inBrowser") == null) {
            DesiredCapabilities  dCaps = new DesiredCapabilities();
            dCaps.setJavascriptEnabled(true);
            dCaps.setCapability("takesScreenshot", false);
            driver = new PhantomJSDriver(dCaps);
        } else {
            driver = new FirefoxDriver(DesiredCapabilities.firefox());
        }
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
    
    @After
    public void tearDown() {
        driver.quit();
    }
    
    public static String getUiUrl(String page) {
        return baseUrl + page;
    }
    
    public static WebDriver getDriver() {
        return driver;
    }
}
