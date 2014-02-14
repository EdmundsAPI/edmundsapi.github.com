package com.edmunds.devportal;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(format = "json:target/cucumber-report.json")
public class RunCukesTest extends AbstractTestNGCucumberTests {

    private static String baseUrl;
    private static RemoteWebDriver driver;

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
        driver.manage().window().setSize(new Dimension(1280, 1024));
    }
    
    @After
    public void tearDown() {
        driver.quit();
    }
    
    public static String getUiUrl(String page) {
        return baseUrl + page;
    }
    
    public static RemoteWebDriver getDriver() {
        return driver;
    }
}
