package com.edmunds.devportal;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShowcaseStepdefs {
    
    @Then("the showcases should be available")
    public void the_showcases_should_be_available(DataTable table) {
        List<String> showcases = table.asList(String.class);
        WebElement menu = getDriver().findElement(By.className("multiLevelMenu"));
        List<WebElement> items = menu.findElements(By.tagName("a"));
        for (WebElement showcase : items) {
            assertTrue(showcases.contains(showcase.getText()));
        }
        assertEquals(items.size(), showcases.size());
    }
    
    @Then("the '(.*)' showcase should be active")
    public void the_showcase_should_be_active(String showcase) {
        WebElement menu = getDriver().findElement(By.className("multiLevelMenu"));
        WebElement activeShowcase = menu.findElement(By.className("active"));
        assertEquals(activeShowcase.getText(), showcase, "Showcase is not active");
    }
    
    @And("the list of '(.*)' applications should be present")
    public void the_list_of_applications_should_be_present(String showcase) {
        String filterName = getDriver().findElement(By.className("multiLevelMenu")).findElement(By.linkText(showcase)).getAttribute("data-filter");
        List<WebElement> applications = getDriver().findElement(By.className("wrapperResultFilter")).findElements(By.tagName("li"));
        WebDriverWait wait = new WebDriverWait(getDriver(), 3);
        
        for (WebElement application : applications) {
            if(application.getAttribute("class").contains(filterName)) {
                wait.until(ExpectedConditions.visibilityOf(application));
                assertTrue(application.isDisplayed(), "application should be displayed");
                
                WebElement title = application.findElement(By.tagName("a"));
                assertTrue(title.getAttribute("class").contains("titleCompany") || title.getAttribute("title").equals("Edmunds"), 
                        "application title is missing");
                assertFalse(application.findElements(By.className("tagsCompany")).isEmpty(), "application tags are missing");
                assertFalse(application.findElements(By.tagName("img")).isEmpty(), "application image is missing");
            } else {
                wait.until(ExpectedConditions.not(ExpectedConditions.visibilityOf(application)));
                assertFalse(application.isDisplayed(), "application should not be displayed");
            }
        }
    }
    
    @When("I choose '(.*)' showcase")
    public void I_choose_showcase(String showcase) {
        WebElement menu = getDriver().findElement(By.className("multiLevelMenu"));
        WebElement showcaseLink = menu.findElement(By.linkText(showcase));
        showcaseLink.click();
    }
    
}
