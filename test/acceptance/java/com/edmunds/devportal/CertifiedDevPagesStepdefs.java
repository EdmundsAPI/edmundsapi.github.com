package com.edmunds.devportal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import java.util.List;
import org.apache.commons.collections.CollectionUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

public class CertifiedDevPagesStepdefs {

    public static final String DISPLAY_STYLE_PROPERTY = "display";
    public static final String ACTIVE_BLOCK_PROPERTY_VALUE = "block";
    public static final String INACTIVE_BLOCK_PROPERTY_VALUE = "none";
    private List<String> menu;

    @Given("there is a list of left menu items for certified-dev pages")
    public void there_is_a_list_of_left_menu_items_for_certified_dev_pages(DataTable table) {
        menu = table.asList(String.class);
    }

    @Then("the certified-dev page should have '(.*)' in the page title")
    public void the_certified_dev_page_title_should_be(String expectedPageTitle) {
        WebElement titleElement = getDriver().findElement(By.cssSelector(".tittleContent")).findElement(
            By.tagName("h2"));
        assertTrue(titleElement.isDisplayed());
        assertEquals(titleElement.getText(), expectedPageTitle);
    }

    @And("I should see menu for certified-dev network")
    public void I_should_see_left_menu_for_certified_dev_network() {
        WebElement menu = getDriver().findElement(By.cssSelector(".multiLevelMenu"));
        assertTrue(menu.isDisplayed());
    }

    @Then("I choose '(.*)' item from menu on certified-dev page")
    public void I_choose_left_menu(String menu) {
        WebElement menuContainer = getDriver().findElement(By.cssSelector(".multiLevelMenu"));
        WebElement menuItem = menuContainer.findElement(By.linkText(menu));
        menuItem.click();
    }

    @And("menu for certified-dev network should have items")
    public void menu_for_certified_dev_should_have_items() {
        WebElement menuContainer = getDriver().findElement(By.cssSelector(".multiLevelMenu"));
        List<WebElement> menuItems = menuContainer.findElements(By.tagName("a"));

        assertEquals(menuItems.size(), menu.size());
        assertTrue(CollectionUtils.isEqualCollection(menu, Lists.transform(menuItems,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
    }

    @And("^the business owner block should be active$")
    public void the_business_owner_block_should_be_active() {
        WebElement ownerBlock = getDriver().findElement(By.className("business_owner"));
        String blockStatus = ownerBlock.getCssValue(DISPLAY_STYLE_PROPERTY);
        assertEquals(blockStatus, ACTIVE_BLOCK_PROPERTY_VALUE);
    }

    @And("^the developer block should be active$")
    public void the_developer_block_should_be_active() {
        WebElement ownerBlock = getDriver().findElement(By.className("certified_developer"));
        String blockStatus = ownerBlock.getCssValue(DISPLAY_STYLE_PROPERTY);
        assertEquals(blockStatus, ACTIVE_BLOCK_PROPERTY_VALUE);
    }

    @And("^the business owner block should be inactive$")
    public void the_business_owner_block_should_be_inactive() {
        WebElement ownerBlock = getDriver().findElement(By.className("business_owner"));
        String blockStatus = ownerBlock.getCssValue(DISPLAY_STYLE_PROPERTY);
        assertEquals(blockStatus, INACTIVE_BLOCK_PROPERTY_VALUE);
    }

    @And("^the developer block should be inactive$")
    public void the_developer_block_should_be_inactive() {
        WebElement ownerBlock = getDriver().findElement(By.className("certified_developer"));
        String blockStatus = ownerBlock.getCssValue(DISPLAY_STYLE_PROPERTY);
        assertEquals(blockStatus, INACTIVE_BLOCK_PROPERTY_VALUE);
    }
}
