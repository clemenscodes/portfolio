# Portfolio

This is a repository for a scalable web application using ```Next.js``` and ```TailwindCSS``` along with ```Jest```, ```Cypress``` and ```Storybook``` preconfigured.

There are some helper scripts and tooling utilities configured in ```package.json``` and ```scripts``` to test the workspace or add new features.

The project also uses ```husky``` commit hooks for linting and testing the workspace with ```cz-git```.

## Installation

With the required dependencies setup, simply run:

```sh
yarn
```

For convenience, installing ```nx``` globally using ```npm``` is recommended:

```sh
npm i -g nx
```

Afterwards, the project is fully manageable using the ```nx``` CLI.

## Running

```sh
nx serve
```

### Cypress

```sh
nx e2e web-e2e
```

## Testing

```sh
nx run-many -t test --output-style stream
```
