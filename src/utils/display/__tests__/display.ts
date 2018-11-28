import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { display } from '../display';

describe('display', () => {
  it('should return a function', () => {
    const result = display();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `display` as component and css prop', () => {
    const result = display()({ display: 'inherit' });
    expect(result).toEqual({ display: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = display<'a'>()({ display: 'a' });
    expect(result).toEqual({ display: 'a' });
  });

  it('should use an interface which marks `display` as optional', () => {
    const result = display<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = display<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ display: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      display: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = display<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      display: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      display: 'a',
      [theme.breakpoints.large]: {
        display: 'b',
      },
      [theme.breakpoints.medium]: {
        display: 'c',
      },
      [theme.breakpoints.small]: {
        display: 'd',
      },
    });
  });
});
