# Nx with Next.js, Tailwind, Storybook, Jest and Cypress

This is a repository for a scalable web application using ```Next.js``` and ```TailwindCSS``` along with ```Jest```, ```Cypress``` and ```Storybook``` preconfigured.

There are some helper scripts and tooling utilities configured in ```package.json``` and ```scripts``` to test the workspace or add new features.

The project also uses ```husky``` commit hooks for linting and testing the workspace with ```cz-git```.

## Requirements

To setup this project, following dependencies will be needed:

- Linux based operating system (or WSL on Windows)

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

### NxCloud

Usage of NxCloud and its distributed caching, task execution and code generation is highly recommended.

```sh
nx connect
```

Then add the following cacheable operations to tasksRunnerOptions.default.options.cacheableOperations in ```nx.json```:

```json
{
    "tasksRunnerOptions": {
        "default": {
            "runner": "@nrwl/nx-cloud",
            "options": {
                "cacheableOperations": [
                    "lint",
                    "build",
                    "test",
                    "e2e",
                    "docker",
                    "deploy"
                ],
                "accessToken": "<YOUR_ACCESS_TOKEN>"
            }
        }
    }
}
```

## Running

```sh
nx start web # run the web app
```

## Developing

There are two helper scripts which can generate a new component or page in the ```libs/shared``` library.

```sh
yarn component login-button
```

This will generate the ```LoginButton``` component as ```libs/shared/src/components/login-button/login-button.tsx``` along with ```Jest``` and ```Storybook``` test files and export it from the shared library.

Afterwards, you can use the component in all your apps by importing it with:

```ts
import { LoginButton } from '@components';
```

## Testing

The following scripts help to test the workspace and take the amount of cores to use as an optional argument:

```sh
yarn format  # format the entire workspace
yarn full 8  # test all targets
yarn ci 8    # test only affected targets
yarn debug 8 # test only failed targets
```

### Storybook

```sh
nx start sb # run storybook
```

### Cypress

```sh
nx e2e web # run cypress for web app
```
