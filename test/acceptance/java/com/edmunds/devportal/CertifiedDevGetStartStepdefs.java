package com.edmunds.devportal;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

public class CertifiedDevGetStartStepdefs {

    private List<String> menu;

    @Given("there is a left menu")
    public void there_is_a_left_menu(DataTable table) {
        menu = table.asList(String.class);
    }

    @And("the page should have a left menu")
    public void the_page_should_have_a_left_menu() {
        WebElement ulMenu = getDriver().findElement(By.className("multiLevelMenu"));
        assertNotNull(ulMenu);
        List<WebElement> list = ulMenu.findElements(By.tagName("li"));
        assertNotNull(list);
        for (WebElement element : list) {
            assertTrue(menu.contains(element.getText()));
        }
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

}
