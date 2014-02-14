package com.edmunds.devportal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
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

public class CertifiedDevGetStartStepdefs {
    private List<String> leftList;
    private List<String> rightList;
    private List<String> descriptions;
    private List<String> navigatedList;
    private List<String> menu;

    @Given("there is a left menu")
    public void there_is_a_left_menu(List<String> menu) {
        this.menu = menu;
    }

    @Given("there is a left list")
    public void there_is_a_left_list(List<String> leftList) {
        this.leftList = leftList;
    }

    @Given("there is a right list")
    public void there_is_a_right_list(List<String> rightList) {
        this.rightList = rightList;
    }

    @Given("there is descriptions of badges")
    public void there_is_descriptions_of_badges(List<String> descriptions) {
        this.descriptions = descriptions;
    }

    @Given("there is a navigated list")
    public void there_is_a_navigated_list(List<String> navigatedList) {
        this.navigatedList = navigatedList;
    }

    @And("the page should have a left menu")
    public void the_page_should_have_a_left_menu() {
        WebElement ulMenu = getDriver().findElement(By.className("multiLevelMenu"));
        assertNotNull(ulMenu);
        List<WebElement> list = ulMenu.findElements(By.tagName("li"));
        assertNotNull(list);
        assertTrue(CollectionUtils.isEqualCollection(menu, Lists.transform(list,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
    }

    @And("the right block should be visible")
    public void the_right_block_should_be_visible() {
        WebElement leftBlock = getDriver().findElement(By.className("business_owner"));
        assertNotNull(leftBlock);
        assertEquals(leftBlock.getCssValue("display"), "none");
        WebElement rightBlock = getDriver().findElement(By.className("certified_developer"));
        assertNotNull(rightBlock);
        assertEquals(rightBlock.getCssValue("display"), "block");
    }

    @And("the left block should be visible")
    public void the_left_block_should_be_visible() {
        WebElement leftBlock = getDriver().findElement(By.className("business_owner"));
        assertNotNull(leftBlock);
        assertEquals(leftBlock.getCssValue("display"), "block");
        WebElement rightBlock = getDriver().findElement(By.className("certified_developer"));
        assertNotNull(rightBlock);
        assertEquals(rightBlock.getCssValue("display"), "none");
    }

    @And("the page should have a navigated list")
    public void the_page_should_have_a_navigated_list() {
        WebElement ulList = getDriver().findElement(By.className("footerLinks"));
        assertNotNull(ulList);
        List<WebElement> list = ulList.findElements(By.tagName("li"));
        assertNotNull(list);
        assertTrue(CollectionUtils.isEqualCollection(navigatedList, Lists.transform(list,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
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
        assertTrue(CollectionUtils.isEqualCollection(rightList, Lists.transform(items,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
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
        assertTrue(CollectionUtils.isEqualCollection(leftList, Lists.transform(items,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
    }

    @And("the link '(.*)' should be visible")
    public void the_link_should_be_visible(String text) {
        WebElement link = getDriver().findElement(By.linkText(text));
        assertNotNull(link);
        assertTrue(link.isDisplayed());
    }

    @Then("I click to badge")
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
}
