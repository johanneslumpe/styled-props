import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minHeight } from '../minHeight';

describe('minHeight', () => {
  it('should return a function', () => {
    const result = minHeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minHeight` as component and css prop', () => {
    const result = minHeight()({ minHeight: 'inherit' });
    expect(result).toEqual({ minHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minHeight<'a'>()({ minHeight: 'a' });
    expect(result).toEqual({ minHeight: 'a' });
  });

  it('should allow using a theme', () => {
    const result = minHeight<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ minHeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minHeight<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      minHeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minHeight: 'a',
      [theme.breakpoints.large]: {
        minHeight: 'b',
      },
      [theme.breakpoints.medium]: {
        minHeight: 'c',
      },
      [theme.breakpoints.small]: {
        minHeight: 'd',
      },
    });
  });
});
