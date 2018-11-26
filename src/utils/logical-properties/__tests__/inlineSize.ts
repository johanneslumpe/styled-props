import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { inlineSize } from '../inlineSize';

describe('inlineSize', () => {
  it('should return a function', () => {
    const result = inlineSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `inlineSize` as component and css prop', () => {
    const result = inlineSize()({ inlineSize: 'inherit' });
    expect(result).toEqual({ inlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = inlineSize<'a'>()({ inlineSize: 'a' });
    expect(result).toEqual({ inlineSize: 'a' });
  });

  it('should allow using a theme', () => {
    const result = inlineSize<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ inlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      inlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = inlineSize<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      inlineSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      inlineSize: 'a',
      [theme.breakpoints.large]: {
        inlineSize: 'b',
      },
      [theme.breakpoints.medium]: {
        inlineSize: 'c',
      },
      [theme.breakpoints.small]: {
        inlineSize: 'd',
      },
    });
  });
});
