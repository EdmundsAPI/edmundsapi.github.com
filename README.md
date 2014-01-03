# Edmunds Developer Portal

## Testing

### Staging

[![Build Status](https://travis-ci.org/edmundsapi-preprod/edmundsapi-preprod.github.com.png)](https://travis-ci.org/edmundsapi-preprod/edmundsapi-preprod.github.com)

### Running tests locally

#### Setup testing environment

Install gems:

  - gem install rake
  - gem install jekyll
  - gem install cucumber
  - gem install rspec
  - gem install capybara
  - gem install poltergeist

Install [PhantomJS] (http://phantomjs.org/)

#### Build the site

    jekyll serve

#### Run the tests

Run all tests:

    rake test

Run unit tests only:

    rake test:unit

Run acceptance tests only:

    rake test:acceptance SITE_URL={http url}