package com.edmunds.devportal;

import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.edmunds.devportal.RunCukesTest.getDriver;

public class CertifiedDevWhyBuildPageStepdefs {
    @Then("I click to the get started button as business owner")
    public void I_click_to_the_get_started_as_business_owner() {
        WebElement ownerBlock = getDriver().findElement(By.className("wrapCustomerBlock"));
        WebElement button = ownerBlock.findElement(By.tagName("article")).findElement(By.tagName("a"));
        button.click();
    }

    @Then("I click to the get started button as developer")
    public void I_click_to_the_get_started_as_developer_owner() {
        WebElement ownerBlock = getDriver().findElement(By.className("wrapDeveloperBlock"));
        WebElement button = ownerBlock.findElement(By.tagName("article")).findElement(By.tagName("a"));
        button.click();
    }
}
