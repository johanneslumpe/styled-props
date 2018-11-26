import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outline } from '../outline';

describe('outline', () => {
  it('should return a function', () => {
    const result = outline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outline` as component and css prop', () => {
    const result = outline()({ outline: 'inherit' });
    expect(result).toEqual({ outline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outline<'a'>()({ outline: 'a' });
    expect(result).toEqual({ outline: 'a' });
  });

  it('should allow using a theme', () => {
    const result = outline<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ outline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outline<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      outline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outline: 'a',
      [theme.breakpoints.large]: {
        outline: 'b',
      },
      [theme.breakpoints.medium]: {
        outline: 'c',
      },
      [theme.breakpoints.small]: {
        outline: 'd',
      },
    });
  });
});
