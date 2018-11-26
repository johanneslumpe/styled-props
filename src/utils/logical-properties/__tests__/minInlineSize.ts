import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minInlineSize } from '../minInlineSize';

describe('minInlineSize', () => {
  it('should return a function', () => {
    const result = minInlineSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minInlineSize` as component and css prop', () => {
    const result = minInlineSize()({ minInlineSize: 'inherit' });
    expect(result).toEqual({ minInlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minInlineSize<'a'>()({ minInlineSize: 'a' });
    expect(result).toEqual({ minInlineSize: 'a' });
  });

  it('should allow using a theme', () => {
    const result = minInlineSize<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ minInlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minInlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minInlineSize<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      minInlineSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minInlineSize: 'a',
      [theme.breakpoints.large]: {
        minInlineSize: 'b',
      },
      [theme.breakpoints.medium]: {
        minInlineSize: 'c',
      },
      [theme.breakpoints.small]: {
        minInlineSize: 'd',
      },
    });
  });
});
