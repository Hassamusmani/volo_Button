# design-library-coding-challenge

Coding challenge to implement a reusable button component for Volocopter.

In this project, we set up a basic design library on the base of Chakra-UI, with our own design tokens and some components.
The components in this library are meant to be used in many other projects within our company.
Therefore it is important that we:

-   write components that are highly reusable and easily extendable
-   make sure to keep breaking changes to a minimum to not impact the work of other teams
-   make it hard to do something with the component that goes against the specifications made by UX

## Project Prerequisites

-   Node: recommended version is 16.13.2
-   Pnpm: `npm install -g pnpm`

## Tech Stack

This project uses:

-   React (v17)
-   TypeScript
-   ESLint and Prettier for code analysis and formatting
-   Jest and react-testing-library for unit testing
-   [Chakra UI (v1.8)](https://v1.chakra-ui.com/guides/first-steps) as a base for the design library
-   [Storybook](https://storybook.js.org/) to showcase components

Also, for the component specs,

if you are unfamiliar with any of these technologies, feel free to read up on them before the exercise!

## Initial Setup

Before you get started, let's make sure everything works:

-   Install dependencies with `pnpm install`
-   Run lint with `pnpm lint`
-   Run tests with `pnpm test`
-   Start storybook with `pnpm storybook`

## Your Task

You got specs for a new button component from UX that needs to be implemented in the design library:
[Figma Link](https://www.figma.com/file/PvSZGaKwUu8tB2i0IfiUjP/Button-Coding-Challenge?node-id=0%3A1&t=z42CxNx5tCNQzfNF-1)

For that you need to do the following:

-   Restrict the ButtonProps so that the button cannot be used in an unintended way
-   Style the button according to the Figma specs
    -   including states (hover, active, disabled)
    -   including variants (primary, secondary, ghost)
-   Add meaningful tests for the Button component
-   Add storybook stories to showcase the button's features
-   Make the Button component accessible to the outside
-   Bonus: Add the feature to add an icon to the button

## Hints

-   in order to view the applied design tokens and properties in Figma, you need to be logged in to a Figma account
-   Look at how other components in the project are implemented and tested
-   Storybook has a pseudo-states addon set up that helps you view the different states like hover and active
-   you can ignore the font-face differences, but other than that your component should look exactly like the specs
-   Only include the props that are needed for the basic functionality of a button and to position it: put yourself in the shoes of the developer using the component
-   use the design tokens defined in the project where applicable
-   check the Chakra documentation on how to structure component styles to give the styles a meaningful structure and improve maintainability

## Support

This project is maintained by the Frontend Community of Practice.
