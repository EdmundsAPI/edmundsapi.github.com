package com.edmunds.devportal;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

public class CertifiedDevPoliciesStepdefs {

    private List<String> policies;

    @Given("there is a list of policies")
    public void there_is_a_list_of_policies(List<String> policies) {
        this.policies = policies;
    }

    @And("the page should have list of policies")
    public void the_page_should_have_list_of_polities() {
        for (String police : policies) {
            WebElement linkElement = getDriver().findElement(By.linkText(police));
            assertNotNull(linkElement);
            assertTrue(linkElement.isDisplayed());
        }
    }

}
