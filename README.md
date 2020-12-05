![dianabook](./client/public/assets/images/logo.png)



# DianaBook

![banner](./public/assets/images/logo.png)

![badge]()
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)[![license](https://img.shields.io/github/license/dianafreeman/:repo.svg)](LICENSE)[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)



##  Overview

This project has two components: 



the `client` includes a collection of components that I have started in other projects, then abandoned but saved in case I want to revisit them later. 



the `server` is the dianabook REST api. Endpoints [will] include: 

- projects/
- technologies/
- clients/
- assets/
- tags/



the `hub` is the self-service client for the `server` application

# Todo

 [] Convert the client to be primarily a storybook application

##  Requirements

[Docker](https://docs.docker.com/) and [docker-compose](https://docs.docker.com/compose)

***OR***

 `node version >12.8` and `npm` on your local machine.

##  Install

If using docker, run the following command to prep your local environment

```sh
$ make install
```

If using NPM, clone this repository locally, then run

```sh
$ yarn install ## preferred for dependency management
$ npm install  ## if you insist...
```

##  Usage

Run the following command to view the react app bolerplate

```sh
## With Docker
$ make client

## Without Docker
$ yarn start
```

Run the following command to open a bash console within the docker container

```sh
$ make cli
```



##  Testing

Run the following command to run the cypress integration test

```sh
## With Docker
$ make integration-test

## Without Docker
$ yarn run test:integration
```





## Platforms & Frameworks

### System/Infra

* [Docker](https://docs.docker.com/) and [docker-compose](https://docs.docker.com/compose) *(optional)*

* [Create React App](https://create-react-app.dev/)

### Testing

Visit the confluence page for additional details on testing frameworks, rationale, and practices

* [Cypress.io](https://www.cypress.io/)

* [React Testing Library](https://github.com/testing-library/react-testing-library)

* [RSpec](https://rspec.info/)

* [Jest](https://jestjs.io/)   (*[c/o Create React App](c/o Create React App)*)

* [Chai Assertion Library](https://www.chaijs.com/)

  ### CI/CD

- [CircleCI](https://circleci.com/dashboard)

### Code Style Enforcement

* [Rubocop](https://github.com/rubocop-hq/rubocop) (Ruby)

* [Prettier](https://prettier.io/) (Javascript)

* [EsLint](https://eslint.org/) (*[c/o Create React App](https://create-react-app.dev/docs/setting-up-your-editor/)*)



## 🏗 Convenience Tooling

**List targets in Makefile**

Run `make` from the root directory to view a list and description of make targets

**NPM Executables**

This package uses a few additional NPM targets to automate different build options for Cypress.io Run `npm run ` from the root directory to view a full list of NPM executables.



## Contributing

Feel free to dive in and submit PRs.

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct).



##### Contributors

[Diana M Steakley-Freeman](github.com/dianafreeman)



