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

### Deploying the site

This repository is configured to use Github Pages. The source for the build and deployment is the `master` branch. Once a pull request is merged, the default [pages build and deployment](https://github.com/EdmundsAPI/edmundsapi.github.com/actions/workflows/pages/pages-build-deployment) workflow is started which builds and deploys the static site using jekyll.

If the workflow is not starting after merging changes, make sure to verify a [runner](https://github.com/EdmundsAPI/edmundsapi.github.com/actions/runners) is set up for the repository. The reposiry is currently using a Github-hosted runner: `Standard GitHub-hosted runners`