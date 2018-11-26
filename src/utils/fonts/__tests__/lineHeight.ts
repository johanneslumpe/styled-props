import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { lineHeight } from '../lineHeight';

describe('lineHeight', () => {
  it('should return a function', () => {
    const result = lineHeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `lineHeight` as component and css prop', () => {
    const result = lineHeight()({ lineHeight: 'inherit' });
    expect(result).toEqual({ lineHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = lineHeight<'a'>()({ lineHeight: 'a' });
    expect(result).toEqual({ lineHeight: 'a' });
  });

  it('should allow using a theme', () => {
    const result = lineHeight<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ lineHeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      lineHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = lineHeight<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      lineHeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      lineHeight: 'a',
      [theme.breakpoints.large]: {
        lineHeight: 'b',
      },
      [theme.breakpoints.medium]: {
        lineHeight: 'c',
      },
      [theme.breakpoints.small]: {
        lineHeight: 'd',
      },
    });
  });
});
