import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineOffset } from '../outlineOffset';

describe('outlineOffset', () => {
  it('should return a function', () => {
    const result = outlineOffset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineOffset` as component and css prop', () => {
    const result = outlineOffset()({ outlineOffset: 'inherit' });
    expect(result).toEqual({ outlineOffset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineOffset<'a'>()({ outlineOffset: 'a' });
    expect(result).toEqual({ outlineOffset: 'a' });
  });

  it('should allow using a theme', () => {
    const result = outlineOffset<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ outlineOffset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineOffset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineOffset<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      outlineOffset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineOffset: 'a',
      [theme.breakpoints.large]: {
        outlineOffset: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineOffset: 'c',
      },
      [theme.breakpoints.small]: {
        outlineOffset: 'd',
      },
    });
  });
});
