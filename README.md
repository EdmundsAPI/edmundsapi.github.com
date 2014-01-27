# Edmunds Developer Portal

## Testing

### Production

[![Build Status](https://travis-ci.org/EdmundsAPI/edmundsapi.github.com.png)](https://travis-ci.org/EdmundsAPI/edmundsapi.github.com)

### Staging

[![Build Status](https://travis-ci.org/edmundsapi-preprod/edmundsapi-preprod.github.com.png)](https://travis-ci.org/edmundsapi-preprod/edmundsapi-preprod.github.com)

### Running tests locally

#### Setup testing environment

Install gems:

  - gem install rake
  - gem install jekyll

Install [PhantomJS] (http://phantomjs.org/)

Install JDK and Maven.

#### Build the site

    jekyll serve

#### Run the tests

Run all tests:

    rake test

Run unit tests only:

    rake test:unit

Run acceptance tests only:

    rake test:acceptance

Run acceptance tests against remote deployment:

    rake test:acceptance REMOTE=true (will use CNAME hostname) or rake test:acceptance SITE_URL={http url}