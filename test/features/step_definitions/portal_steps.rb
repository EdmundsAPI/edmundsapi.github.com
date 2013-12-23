Given /I have opened (.*) page/ do |ref|
  visit ui_url ref
end

Then /the page should have (.*) in title/ do |title|
  page.has_title? title
end