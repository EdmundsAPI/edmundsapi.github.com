package com.edmunds.devportal;

import static com.edmunds.devportal.RunCukesTest.getDriver;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WidgetsAndAppsStepdefs {

    @Then("I should see carousel")
    public void I_should_see_carousel() {
        WebElement carousel = getDriver().findElement(By.id("myCarousel"));
        assertTrue(carousel.isDisplayed());
    }
    
    @And("the carousel should have items")
    public void the_carousel_should_have_items(DataTable items) {
        List<String> carouselItems = items.asList(String.class);
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        for (String item : carouselItems) {
            WebElement carouselItem = carousel.findElement(By.partialLinkText(item));
            assertTrue(carouselItem.isDisplayed());
        }
        assertEquals(carousel.findElements(By.tagName("a")).size(), carouselItems.size());
    }
    
    @Then("the '(.*)' carousel item should be active")
    public void the_carousel_item_should_be_active(String item) {
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        WebElement activeItem = carousel.findElement(By.className("active"));
        WebElement linkItem = carousel.findElement(By.partialLinkText(item));
        assertEquals(activeItem.findElement(By.tagName("a")), linkItem, "Carousel item is not active");
        
        int xStart = activeItem.getLocation().getX();
        int xEnd = xStart + activeItem.getSize().getWidth();
        
        WebElement arrow = getDriver().findElement(By.id("myCarousel")).findElement(By.className("arrow"));
        int arrowX = arrow.getLocation().getX();
        
        assertTrue(arrowX > xStart && arrowX < xEnd, "Widgets carousel arrow doesn't work");
    }
    
    @And("the slide '(.*)' should be displayed")
    public void the_slide_should_be_displayed(String slideNum) {
        WebElement slider = getDriver().findElement(By.id("myCarousel")).findElement(By.className("slider-content"));
        WebElement slide = slider.findElement(By.cssSelector(".item.active")).findElement(By.className("slide" + slideNum));
        assertTrue(slide.isDisplayed());
    }
    
    @And("the slide (.*) should have links")
    public void the_slide_should_have_links(String slideNum, DataTable links) {
        WebElement slider = getDriver().findElement(By.id("myCarousel")).findElement(By.className("slider-content"));
        WebElement slide = slider.findElement(By.className("slide" + slideNum));
        List<String> linkItems = links.asList(String.class);
        for (String link : linkItems) {
            WebElement linkItem = slide.findElement(By.linkText(link));
            assertTrue(linkItem.isDisplayed());
        }
    }
    
    @When("I select '(.*)' carousel item")
    public void I_select_carousel_item(String item) {
        WebElement carousel = getDriver().findElement(By.className("carousel-indicators"));
        WebElement linkItem = carousel.findElement(By.partialLinkText(item));
        linkItem.click();
    }
    
    @When("I click on '(.*)' button of slide (.*)")
    public void I_click_on_button(String buttonText, String slideNum) {
        WebElement slider = getDriver().findElement(By.id("myCarousel")).findElement(By.className("slider-content"));
        WebElement slide = slider.findElement(By.className("slide" + slideNum));
        WebElement button = slide.findElement(By.linkText(buttonText));
        assertTrue(button.isDisplayed());
        button.click();
    }
    
    @Then("I should see '(.*)' widget article")
    public void I_should_see_widget_article(String articleName) {
        WebElement article = getDriver().findElement(By.xpath("//h2[text()='" + articleName + "']"));
        assertTrue(article.isDisplayed());
    }
    
    @And("the widget article should have buttons")
    public void the_widget_article_should_have_buttons(DataTable buttons) {
        List<String> buttonColors = buttons.asList(String.class);
        for (String buttonColor : buttonColors) {
            WebElement button = getDriver().findElement(By.className("btn-control-group")).findElement(By.className(buttonColor));
            assertTrue(button.isDisplayed());
        }
    }
    
    @When("I click on '(.*)' color button")
    public void I_click_on_color_button(String buttonColor) {
        WebElement button = getDriver().findElement(By.className("btn-control-group")).findElement(By.className(buttonColor));
        button.click();
    }
    
    @Then("I should see '(.*)' widget background")
    public void I_should_see_widget_background(String buttonColor) {
        WebElement background = getDriver().findElement(By.className("screen-bgnd"));
        assertTrue(background.getAttribute("class").contains(buttonColor), "Widget background is not correct");
    }
    
    @Then("I should see '(.*)' slider")
    public void I_should_see_slider(String sliderName) {
        WebElement slider = getDriver().findElement(By.className("wrapperSlider" + sliderName));
        assertTrue(slider.isDisplayed());
    }
    
    @When("I click on point (.*) of '(.*)' slider")
    public void I_click_on_point_of_slider(String pointNum, String sliderName) {
        WebElement slider = getDriver().findElement(By.className("wrapperSlider" + sliderName));
        WebElement point = slider.findElement(By.className("slidePoint" + pointNum));
        point.click();
    }
    
    @Then("the '(.*)' slider should have markers")
    public void the_slider_should_have_markers(String sliderName, List<String> markers) {
        WebElement slider = getDriver().findElement(By.className("wrapperSlider" + sliderName));
        for (int i = 0; i < markers.size(); i ++) {
            WebElement marker = slider.findElement(By.className("mark" + (i + 1)));
            marker.click();
            
            WebElement tip = slider.findElement(By.xpath("//span[text()='" + markers.get(i) + "']"));
            assertTrue(tip.isDisplayed());
        }
    }
    
    @Then("I click on '(.*)' footer button")
    public void I_click_on_footer_button(String buttonName) {
        WebElement button = getDriver().findElement(By.className("footer-section")).findElement(By.linkText(buttonName));
        button.click();
    }
    
    @Then("I should see setup page from '(.*)' source")
    public void I_should_see_setup_page(String source) {
        WebElement widget = getDriver().findElement(By.tagName("iframe"));
        assertEquals(widget.getAttribute("src"), source);
    }
    
    @And("the widget article should have step slides")
    public void the_widget_article_should_have_step_slides() {
        WebElement slides = getDriver().findElement(By.className("step-slides"));
        assertTrue(slides.isDisplayed());
    }
    
    @When("I click on step (.*)")
    public void I_click_on_step(Integer stepNum) {
        WebElement paging = getDriver().findElement(By.className("step-slides")).findElement(By.className("paging-indicators"));
        List<WebElement> steps = paging.findElements(By.tagName("li"));
        WebElement step = steps.get(stepNum - 1);
        step.click();
    }
    
    @Then("I should see '(.*)' step header")
    public void I_should_see_step_header(String headerText) {
        WebElement header = getDriver().findElement(By.cssSelector(".step-header.active"));
        assertTrue(header.getText().contains(headerText), "Step header is not correct");
    }
    
    @Then("the step slide (.*) should be active")
    public void the_step_slide_should_be_active(String stepNum) {
        WebElement slides = getDriver().findElement(By.className("step-slides"));
        slides.findElement(By.cssSelector(".step" + stepNum + ".active"));
    }
}
