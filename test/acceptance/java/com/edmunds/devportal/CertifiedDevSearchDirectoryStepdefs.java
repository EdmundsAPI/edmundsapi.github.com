package com.edmunds.devportal;

import com.google.common.base.Function;
import com.google.common.collect.Lists;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.collections.CollectionUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

public class CertifiedDevSearchDirectoryStepdefs {

    private List<String> qualifications;
    private List<String> locations;

    @Given("there is a qualification types")
    public void there_is_a_qualifications_types(List<String> qualifications) {
        this.qualifications = qualifications;
    }

    @Given("there is a list of locations")
    public void there_is_a_list_of_locations(List<String> locations) {
        this.locations = locations;
    }

    @And("the page should have qualification types")
    public void the_page_should_have_qualification_types() {
        WebElement content = getDriver().findElement(By.id("qualification"));
        assertNotNull(content);
        List<WebElement> types = content.findElements(By.tagName("label"));
        assertTrue(CollectionUtils.isEqualCollection(qualifications, Lists.transform(types,
            new Function<WebElement, String>() {
                @Override
                public String apply(WebElement input) {
                    return input.getText();
                }
            })));
    }

    @When("I click '(.*)' and '(.*)' qualifications checkboxes")
    public void I_click_qualification_checkbox(String type1, String type2) {
        WebElement check1 = getDriver().findElement(By.id(type1));
        check1.click();
        assertTrue(check1.isSelected());
        WebElement check2 = getDriver().findElement(By.id(type2));
        check2.click();
        assertTrue(check2.isSelected());
    }

    @And("the page should have '(.*)' and '(.*)' item filters")
    public void the_page_should_have_item_filters(String item1, String item2) {
        List<WebElement> filters = getDriver().findElements(By.className("itemFilterBadge"));
        assertNotNull(filters);
        assertEquals(filters.size(), 2);
        assertEquals(filters.get(0).getText().trim(), item1);
        assertEquals(filters.get(1).getText().trim(), item2);
    }

    @Then("I click remove '(.*)' item filter")
    public void I_click_remove_item_filter(String item) {
        WebElement itemFilterContent = getDriver().findElement(By.id("selectedQual"));
        assertNotNull(itemFilterContent);
        WebElement itemFilter = itemFilterContent.findElement(By.className(item));
        assertNotNull(itemFilter);
        WebElement removeItem = itemFilter.findElement(By.className("removeOptionFilter"));
        assertNotNull(removeItem);
        removeItem.click();
    }

    @And("checkbox '(.*)' should be unchecked")
    public void checkbox_should_be_unchecked(String item) {
        WebElement checkbox = getDriver().findElement(By.id(item));
        assertNotNull(checkbox);
        assertFalse(checkbox.isSelected());
    }

    @And("developers count in location should be correct")
    public void developers_count_in_location_should_be_correct() {
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (String item : locations) {
            map.put(item, 0);
        }
        List<WebElement> elements = getDriver().findElements(By.className("wrapperDeveloper"));
        for (WebElement element : elements) {
            if (element.isDisplayed()) {
                WebElement description = element.findElement(By.className("discriptDeveloper"));
                assertNotNull(description);
                String location = description.findElements(By.tagName("li")).get(1).getText();
                Integer count = map.get(location);
                map.put(location, ++count);
            }
        }
        WebElement locationContent = getDriver().findElement(By.id("location"));
        assertNotNull(locationContent);
        for (String location : map.keySet()) {
            String result = location + " (" + map.get(location) + ")";
            WebElement element = locationContent.findElement(By.xpath("label[contains(.,'" + location + "')]"));
            assertNotNull(element);
            assertEquals(result, element.getText());
        }

    }

}
