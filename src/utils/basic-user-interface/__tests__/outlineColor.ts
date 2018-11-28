import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineColor } from '../outlineColor';

describe('outlineColor', () => {
  it('should return a function', () => {
    const result = outlineColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineColor` as component and css prop', () => {
    const result = outlineColor()({ outlineColor: 'inherit' });
    expect(result).toEqual({ outlineColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineColor<'a'>()({ outlineColor: 'a' });
    expect(result).toEqual({ outlineColor: 'a' });
  });

  it('should use an interface which marks `outlineColor` as optional', () => {
    const result = outlineColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = outlineColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ outlineColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      outlineColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineColor: 'a',
      [theme.breakpoints.large]: {
        outlineColor: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineColor: 'c',
      },
      [theme.breakpoints.small]: {
        outlineColor: 'd',
      },
    });
  });
});
