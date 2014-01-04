package com.edmunds.devportal;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;
import static org.testng.Assert.fail;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ApiDocumentationStepdefs {
    
    private List<String> specArticles;

    @Given("there is a list of specification articles")
    public void there_is_a_list_of_specification_articles(DataTable table) {
        specArticles = table.asList(String.class);
    }

    @Then("I should see left menu")
    public void I_should_see_left_menu() {
        WebElement menu = getDriver().findElement(By.id("leftMenuFixed"));
        assertTrue(menu.isDisplayed());
    }
    
    @Then("menu '(.*)' should have items")
    public void menu_should_have_items(String menu, DataTable items) {
        WebElement menuContainer = getDriver().findElement(By.id("leftMenuFixed"));
        WebElement menuElement = menu.isEmpty() ? menuContainer : 
            menuContainer.findElement(By.xpath("//a[text()='" + menu + "']/following-sibling::ul"));
        List<String> menuItems = items.asList(String.class);
        for (String item : menuItems) {
            WebElement menuItem = menuElement.findElement(By.linkText(item));
            assertTrue(menuItem.isDisplayed());
        }
    }
    
    @And("the page content should be displayed")
    public void the_page_content_should_be_displayed() {
        WebElement pageContent = getDriver().findElement(By.id("page_content"));
        assertTrue(pageContent.isDisplayed());
    }
    
    @Then("the page content should have articles")
    public void the_page_content_should_have_articles(DataTable articles) {
        WebElement pageContent = getDriver().findElement(By.xpath("//*[@id='page_content']/following-sibling::ul"));
        assertTrue(pageContent.isDisplayed());
        List<String> articleItems = articles.asList(String.class);
        for (String item : articleItems) {
            WebElement articleItem = pageContent.findElement(By.linkText(item));
            assertTrue(articleItem.isDisplayed());
        }
    }
    
    @When("I choose '(.*)' article")
    public void I_choose_an_article(String article) {
        WebElement pageContent = getDriver().findElement(By.xpath("//*[@id='page_content']/following-sibling::ul"));
        WebElement articleLink = pageContent.findElement(By.linkText(article));
        articleLink.click();
    }
    
    @Then("I should see the '(.*)' article content")
    public void I_should_see_the_article_content(String article) {
        List<WebElement> articleContent = getDriver().findElements(By.xpath("//h3[text()='" + article + "']/following-sibling::p"));
        assertFalse(articleContent.isEmpty());
        assertTrue(articleContent.get(0).isDisplayed());
    }
    
    @Then("I return back to the top after '(.*)' article")
    public void I_return_back_to_the_top(String article) {
        List<WebElement> articleContent = getDriver().findElements(By.xpath("//h3[text()='" + article + "']/following-sibling::p"));
        assertFalse(articleContent.isEmpty());
        WebElement endOfArticle = articleContent.get(articleContent.size() - 1);
        WebElement backLink = endOfArticle.findElement(By.linkText("Back to top"));
        backLink.click();
    }
    
    @Then("I choose '(.*)' left menu")
    public void I_choose_left_menu(String menu) {
        WebElement menuContainer = getDriver().findElement(By.id("leftMenuFixed"));
        WebElement menuItem = menuContainer.findElement(By.linkText(menu));
        menuItem.click();
    }
    
    @And("the '(.*)' documentation should(|n't) be present")
    public void the_documentation_should_be_present(String version, String isNotPresent) {
        WebElement header = getDriver().findElement(By.className("api-header-row1"));
        List<WebElement> links = header.findElements(By.tagName("a"));
        WebElement doc = null;
        for (WebElement link : links) {
            if(link.getText().equals(version)) {
                doc = link;
                break;
            }
        }
        if (isNotPresent.isEmpty()) {
            assertTrue(doc != null, "Documentation is missing");
            assertTrue(doc.isDisplayed(), "Documentation is not visible");
        } else {
            assertTrue(doc == null, "Documentation should not be displayed");
        }
    }
    
    @And("the documentation should have (\\d+) endpoints")
    public void the_documentation_should_have_endpoints(int count) {
        List<WebElement> endpoints = getDriver().findElement(By.className("api-header-row2")).findElements(By.name("endpoint"));
        assertEquals(endpoints.size(), count, "Endpoints count doesn't match");
    }
    
    @And("the documentation should not have endpoints")
    public void the_documentation_should_not_have_endpoints() {
        List<WebElement> links = getDriver().findElement(By.className("wrapperHeader")).findElements(By.xpath("//a/.."));
        for (WebElement link : links) {
            if("endpoint".equals(link.getAttribute("name"))) {
                fail("The documentation should not have endpoints");
            }
        }
    }
    
    @When("I choose '(.*)' documentation")
    public void I_choose_documentation(String version) {
        WebElement header = getDriver().findElement(By.className("api-header-row1"));
        WebElement doc = header.findElement(By.linkText(version));
        doc.click();
    }
    
    @When("I choose '(.*)' endpoint")
    public void I_choose_endpoint(String endpoint) {
        WebElement dropdown = getDriver().findElement(By.className("api-header-row2")).findElement(By.className("dropdown-toggle"));
        WebElement endpointLink = getDriver().findElement(By.xpath("//*[@class='option-value' and text()='" + endpoint + "']/parent::a"));
        
        dropdown.click();
        assertTrue(endpointLink.isDisplayed());
        endpointLink.click();
    }
    
    @Then("the endpoint should have specification articles")
    public void the_endpoint_should_have_specification_articles() {
        WebElement submenu = getDriver().findElement(By.className("endpoint-submenu"));
        for (WebElement article: submenu.findElements(By.tagName("a"))) {
            assertTrue(specArticles.contains(article.getText().toLowerCase()));
        }
        assertEquals(submenu.findElements(By.tagName("a")).size(), specArticles.size());
    }
    
}
