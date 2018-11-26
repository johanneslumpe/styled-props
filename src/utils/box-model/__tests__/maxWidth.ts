import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maxWidth } from '../maxWidth';

describe('maxWidth', () => {
  it('should return a function', () => {
    const result = maxWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maxWidth` as component and css prop', () => {
    const result = maxWidth()({ maxWidth: 'inherit' });
    expect(result).toEqual({ maxWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxWidth<'a'>()({ maxWidth: 'a' });
    expect(result).toEqual({ maxWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = maxWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maxWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maxWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maxWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maxWidth: 'a',
      [theme.breakpoints.large]: {
        maxWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        maxWidth: 'c',
      },
      [theme.breakpoints.small]: {
        maxWidth: 'd',
      },
    });
  });
});
