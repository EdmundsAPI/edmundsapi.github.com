Given /I have opened (.*) page/ do |ref|
  visit ui_url ref
end

Then /the page should have (.*) in title/ do |title|
  page.should have_title title
end

Then /I should see multilevel menu/ do
  page.assert_selector('ul.multiLevelMenu')
  @menu = first('ul.multiLevelMenu')
end

Then /menu '(.*)' should have items (.*)/ do |menu, items|
  submenus = items.to_arr
  current_menu = menu == '' ? @menu : @menu.find_link(menu).parent
  submenus.each do |submenu|
    current_menu.should have_link submenu
  end
end
