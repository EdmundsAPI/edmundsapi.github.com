package com.edmunds.devportal;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static com.edmunds.devportal.RunCukesTest.getUiUrl;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MainPagesStepdefs {
    
    private List<String> links;
    private List<String> menu;

    @Given("I have opened '(.*)' page")
    public void I_have_opened_page(String page) {
        getDriver().get(getUiUrl(page));
    }

    @Given("there is a list of links")
    public void there_is_a_list_of_links(List<String> links) {
        this.links = links;
    }
    
    @Given("there is a list of menu")
    public void there_is_a_list_of_menu(List<String> menu) {
        this.menu = menu;
    }
    
    @Then("the page should have '(.*)' in the title")
    public void the_page_should_have_title(String title) {
        assertEquals(getDriver().getTitle(), title);
    }

    @And("the page should have header links")
    public void the_page_should_have_header_links() {
        WebElement headerLinks = getDriver().findElement(By.className("headerLinks"));
        assertTrue(headerLinks.isDisplayed());
        for (String link : links) {
            WebElement linkElement = headerLinks.findElement(By.linkText(link));
            assertTrue(linkElement.isDisplayed());
        }
    }
    
    @And("the page should have header menu")
    public void the_page_should_have_header_menu() {
        WebElement headerMenu = getDriver().findElement(By.className("headerMenu"));
        assertTrue(headerMenu.isDisplayed());
        for (String item : menu) {
            WebElement menuElement = headerMenu.findElement(By.linkText(item));
            assertTrue(menuElement.isDisplayed());
        }
    }
    
    @And("the page should have link to '(.*)'")
    public void the_page_should_have_link_to(String link) {
        WebElement linkElement = getDriver().findElement(By.linkText(link));
        assertTrue(linkElement.isDisplayed());
    }
    
    @Then("I choose '(.*)' menu")
    public void I_choose_menu(String menu) {
        WebElement linkElement = getDriver().findElement(By.linkText(menu));
        assertTrue(linkElement.isDisplayed());
        linkElement.click();
    }
    
    @And("a new page should be open")
    public void a_new_page_should_be_open() {
        WebDriverWait wait = new WebDriverWait(getDriver(), 10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.tagName("html")));
    }
    
    @And("menu '(.*)' should be active")
    public void menu_should_be_active(String menu) {
        WebElement menuItem = getDriver().findElement(By.linkText(menu));
        String menuClass = menuItem.getAttribute("class");
        assertTrue(menuClass.contains("active"));
    }
    
}
