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
import org.openqa.selenium.interactions.Actions;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

public class CertifiedDevPagesStepdefs {
    public static final String DISPLAY_STYLE_PROPERTY = "display";
    public static final String ACTIVE_BLOCK_PROPERTY_VALUE = "block";
    public static final String INACTIVE_BLOCK_PROPERTY_VALUE = "none";

    private List<String> menu;
    private List<String> leftList;
    private List<String> rightList;
    private List<String> descriptions;
    private List<String> navigatedList;

    @Then("I click to the get started as business owner button")
    public void I_click_to_the_get_started_as_business_owner() {
        WebElement ownerBlock = getDriver().findElement(By.className("wrapCustomerBlock"));
        WebElement button = ownerBlock.findElement(By.tagName("article")).findElement(By.tagName("a"));
        button.click();
    }

    @Then("I click to the get started as developer button")
    public void I_click_to_the_get_started_as_developer_owner() {
        WebElement ownerBlock = getDriver().findElement(By.className("wrapDeveloperBlock"));
        WebElement button = ownerBlock.findElement(By.tagName("article")).findElement(By.tagName("a"));
        button.click();
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


    @Given("there is a left list")
    public void there_is_a_left_list(DataTable table) {
        leftList = table.asList(String.class);
    }

    @Given("there is a right list")
    public void there_is_a_right_list(DataTable table) {
        rightList = table.asList(String.class);
    }

    @Given("there is descriptions of badges")
    public void there_is_descriptions_of_badges(DataTable table) {
        descriptions = table.asList(String.class);
    }

    @Given("there is a navigated list")
    public void there_is_a_navigated_list(DataTable table) {
        navigatedList = table.asList(String.class);
    }

    @And("the page should have left block")
    public void the_page_should_have_left_block() {
        WebElement titleBusinessOwner = getDriver().findElement(By.className("titleBusinessOwner"));
        assertNotNull(titleBusinessOwner);
        WebElement leftBlock = getDriver().findElement(By.className("block1"));
        assertNotNull(leftBlock);
    }

    @And("the page should have right block")
    public void the_page_should_have_right_block() {
        WebElement titleDeveloper = getDriver().findElement(By.className("titleDeveloper"));
        assertNotNull(titleDeveloper);
        WebElement leftBlock = getDriver().findElement(By.className("block2"));
        assertNotNull(leftBlock);
    }

    @And("the page should have badges")
    public void the_page_should_have_badges() {
        WebElement tab = getDriver().findElement(By.id("myTab"));
        assertNotNull(tab);
        List<WebElement> badges = tab.findElements(By.tagName("li"));
        assertNotNull(badges);
        assertEquals(badges.size(), 4);
    }

    @And("the page should have descriptions list")
    public void the_page_should_have_descriptions_list() {
        WebElement tabContent = getDriver().findElement(By.className("tab-content"));
        assertNotNull(tabContent);
        List<WebElement> panes = tabContent.findElements(By.className("tab-pane"));
        assertNotNull(panes);
        assertEquals(descriptions.size(), panes.size());
    }

    @And("the page should have a navigated list")
    public void the_page_should_have_a_navigated_list() {
        WebElement ulList = getDriver().findElement(By.className("footerLinks"));
        assertNotNull(ulList);
        List<WebElement> list = ulList.findElements(By.tagName("li"));
        assertNotNull(list);
        for (WebElement element : list) {
            assertTrue(navigatedList.contains(element.getText()));
        }
    }

    @Then("I direct the mouse over the left block")
    public void I_direct_the_mouse_over_the_left_block() {
        WebElement leftBlock = getDriver().findElement(By.className("block1"));
        Actions actions = new Actions(getDriver());
        actions.moveToElement(leftBlock).build().perform();
    }

    @And("the right list should be visible")
    public void the_right_list_should_be_visible() {
        WebElement rightBlock = getDriver().findElement(By.className("discriptBlokBisOwner"));
        assertNotNull(rightBlock);
        WebElement list = rightBlock.findElement(By.tagName("ul"));
        assertNotNull(list);
        List<WebElement> items = list.findElements(By.tagName("li"));
        assertNotNull(items);
        assertEquals(rightList.size(), items.size());
        for (WebElement item : items) {
            assertTrue(rightList.contains(item.getText()));
            assertTrue(item.isDisplayed());
        }
    }

    @Then("I direct the mouse over the right block")
    public void I_direct_the_mouse_over_the_right_block() {
        WebElement rightBlock = getDriver().findElement(By.className("block2"));
        Actions actions = new Actions(getDriver());
        actions.moveToElement(rightBlock).build().perform();
    }

    @And("the left list should be visible")
    public void the_left_list_should_be_visible() {
        WebElement leftBlock = getDriver().findElement(By.className("discriptBlokDev"));
        assertNotNull(leftBlock);
        WebElement list = leftBlock.findElement(By.tagName("ul"));
        assertNotNull(list);
        List<WebElement> items = list.findElements(By.tagName("li"));
        assertNotNull(items);
        assertEquals(leftList.size(), items.size());
        for (WebElement item : items) {
            assertTrue(leftList.contains(item.getText()));
            assertTrue(item.isDisplayed());
        }
    }

    @And("the link '(.*)' should be visible")
    public void the_link_should_be_visible(String text) {
        WebElement link = getDriver().findElement(By.linkText(text));
        assertNotNull(link);
        assertTrue(link.isDisplayed());
    }

    @Then("I click badge")
    public void I_click_badge() {
        WebElement tab = getDriver().findElement(By.id("myTab"));
        assertNotNull(tab);
        List<WebElement> badges = tab.findElements(By.tagName("li"));
        assertNotNull(badges);
        assertEquals(badges.size(), 4);
        WebElement badgeLink = badges.get(0).findElement(By.tagName("a"));
        assertNotNull(badgeLink);
        badgeLink.click();
    }

    @And("description should be change")
    public void description_should_be_change() {
        WebElement pane = getDriver().findElement(By.className("tab-pane"));
        assertNotNull(pane);
        WebElement description = pane.findElement(By.tagName("p"));
        assertNotNull(description);
        assertTrue(descriptions.contains(description.getText()));
    }

    @Then("I click '(.*)' link")
    public void I_click_link(String link) {
        WebElement linkElement = getDriver().findElement(By.linkText(link));
        assertNotNull(linkElement);
        linkElement.click();
    }

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
}
