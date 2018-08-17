# styled-props

![Build status](https://travis-ci.org/johanneslumpe/styled-props.svg?branch=master)
[![codecov](https://codecov.io/gh/johanneslumpe/styled-props/branch/master/graph/badge.svg)](https://codecov.io/gh/johanneslumpe/styled-props)

This library is designed to enable creation of reusable UI components and is inspired by [styled-system](https://github.com/jxnblk/styled-system). The main difference is that this version relies on objects for theme values and media queries, making it resilient to changes, e.g. when new values or breakpoints are added. Additionally it aims to give users proper auto-completion for css values when using any of the pre-defined helpers within TypeScript. (this is a work in progress)

## Get it

`npm i @johanneslumpe/styled-props`

## Use it

Using `styled-props` is straight forward! First you declare a theme interface for your application:

```ts
// These would usually live in your theme file
interface IColors {
  red: string;
  blue: string;
  green: string;
}

interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
}

interface IMyTheme {
  colors: IColors;
  breakpoints: IBreakpoints;
}

const myTheme: IMyTheme = {
  colors: {
    red: '#f00',
    green: '#0f0',
    blue: '#00f',
  },
  breakpoints: {
    small: '@media (min-width: 30em)',
    medium: '@media (min-width: 40em)',
    large: '@media (min-width: 50em)',
  },
};
```
Now that you have a basic theme, you can utilize `styled-props` to generate css prop utilities:

```ts
import { style } from '@johanneslumpe/styled-props';

interface IColorProps {
  textColor: Extract<keyof IColors, string>;
}

interface IDisplayProps {
  display: 'block' | 'inline-block' | 'inline';
}

const colors = style<IColorProps, IMyTheme, IBreakpoints>({
  // The css property this function should map to
  cssProp: 'color',
  // The property of the component's props to read from
  prop: 'textColor',
  // Optional: The property within the theme to map the `prop` value to
  themeProp: 'colors',
});

// Even though we are not using a theme prop, we have to specify theme
// and breakpoints for responsive values to work.
const display = style<IDisplayProps, IMyTheme, IBreakpoints>({
  cssProp: 'display',
  prop: 'display',
});
```

All that is left to do now is to use these helpers with your components. In our example we will be using `styled-components`:
```tsx
import styled from 'styled-components';
import { StyleProps } from '@johanneslumpe/styled-props';

const MyComponent = styled.div<
  // `StyleProps` is a helper type which will remove the mandatory `theme` prop from helpers which require a theme.
  // This is required because the theme-type does not properly flow through styled components, even when using
  // `ThemedStyledComponentsModule`. Additionally these are the props which will fuel editor auto-completion, so
  // it is unnecessary for `theme` to show up there, as it will be automatically injected.
  StyleProps<typeof display> &
  StyleProps<typeof colors>
>`
  ${display} ${colors}
`;

// Rendering `MyComponent` with basic values
const SomeComponent = () => <MyComponent display="block" color="blue" />;

// Rendering `MyComponent` with responsive values
const AnotherComponent = () => (
  <MyComponent
    // The base value is automatically added to your breakpoints be the library
    // and it used to specify the base value of the property when no media
    // query is applied
    display={{ base: 'block', medium: 'inline-block' }}
    textColor={{ base: 'red', large: 'green' }}
  />
);
```
This is all you need to know to start using the library!

## Documentation

Typedocs can be found in [the docs folder](docs/README.md)