package com.edmunds.devportal;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

public class MainPageStepdefs {

    public static final String CAROUSEL_ERROR_MESSAGE = "The API carousel in main page doesn't work";

    @When("^I select '(.*)' API carousel item$")
    public void I_select_api_carousel_item(String item) {
        WebElement carousel = getDriver().findElement(By.id("myTab"));
        WebElement linkItem = carousel.findElement(By.partialLinkText(item));
        linkItem.click();
    }

    @Then("^the '(\\d+)' item info should be displayed$")
    public void the_carousel_item_info_should_be_displayed(int itemNum) {
        WebElement item = getDriver().findElement(By.id("myTab"));
        List<WebElement> infoList = item.findElements(By.tagName("li"));
        WebElement itemInfo = infoList.get(itemNum - 1);
        assertTrue(itemInfo.isDisplayed());
        String cssClass = itemInfo.getAttribute("class");
        assertTrue(StringUtils.isNotEmpty(cssClass), CAROUSEL_ERROR_MESSAGE);
        assertEquals(cssClass, "active", CAROUSEL_ERROR_MESSAGE);
    }

    @And("the carousel should have '(\\d+)' items")
    public void the_carousel_should_have_items(int itemsNum) {
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        List<WebElement> carouselItems = carousel.findElements(By.tagName("li"));
        assertEquals(carouselItems.size(), itemsNum);
    }

    @When("^I select '(\\d+)' Built with Edmunds API carousel item$")
    public void I_select_Built_with_Edmunds_API_carousel_item(int itemNum) throws Throwable {
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        WebElement linkItem = carousel.findElements(By.tagName("li")).get(itemNum - 1);
        linkItem.click();
    }

    @Then("^the '(\\d+)' Built with Edmunds API carousel item should be active$")
    public void the_Built_with_Edmunds_API_carousel_item_should_be_active(int itemNum) throws Throwable {
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        WebElement activeItem = carousel.findElement(By.className("active"));
        String actualActiveItemNumber = activeItem.getAttribute("data-slide-to");
        assertEquals(Integer.parseInt(actualActiveItemNumber), itemNum - 1);
    }

    @And("^the slide '(\\d+)' of Built with Edmunds API should be displayed$")
    public void the_slide_of_built_with_edmunds_api_should_be_displayed(int slideNum) {
        WebElement activeSlide = getDriver().findElements(By.className("app-picture")).get(slideNum - 1);
        assertEquals(activeSlide.getCssValue("display"), "block");
    }
}
