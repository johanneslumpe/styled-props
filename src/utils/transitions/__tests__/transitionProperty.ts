import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionProperty } from '../transitionProperty';

describe('transitionProperty', () => {
  it('should return a function', () => {
    const result = transitionProperty();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionProperty` as component and css prop', () => {
    const result = transitionProperty()({ transitionProperty: 'inherit' });
    expect(result).toEqual({ transitionProperty: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionProperty<'a'>()({ transitionProperty: 'a' });
    expect(result).toEqual({ transitionProperty: 'a' });
  });

  it('should use an interface which marks `transitionProperty` as optional', () => {
    const result = transitionProperty<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionProperty<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transitionProperty: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionProperty: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionProperty<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transitionProperty: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionProperty: 'a',
      [theme.breakpoints.large]: {
        transitionProperty: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionProperty: 'c',
      },
      [theme.breakpoints.small]: {
        transitionProperty: 'd',
      },
    });
  });
});
