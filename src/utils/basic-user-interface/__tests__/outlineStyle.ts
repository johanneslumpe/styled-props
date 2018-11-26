import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineStyle } from '../outlineStyle';

describe('outlineStyle', () => {
  it('should return a function', () => {
    const result = outlineStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineStyle` as component and css prop', () => {
    const result = outlineStyle()({ outlineStyle: 'inherit' });
    expect(result).toEqual({ outlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineStyle<'a'>()({ outlineStyle: 'a' });
    expect(result).toEqual({ outlineStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = outlineStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ outlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      outlineStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineStyle: 'a',
      [theme.breakpoints.large]: {
        outlineStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineStyle: 'c',
      },
      [theme.breakpoints.small]: {
        outlineStyle: 'd',
      },
    });
  });
});
