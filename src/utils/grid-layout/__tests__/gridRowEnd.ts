import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridRowEnd } from '../gridRowEnd';

describe('gridRowEnd', () => {
  it('should return a function', () => {
    const result = gridRowEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridRowEnd` as component and css prop', () => {
    const result = gridRowEnd()({ gridRowEnd: 'inherit' });
    expect(result).toEqual({ gridRowEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRowEnd<'a'>()({ gridRowEnd: 'a' });
    expect(result).toEqual({ gridRowEnd: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridRowEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridRowEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridRowEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRowEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridRowEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridRowEnd: 'a',
      [theme.breakpoints.large]: {
        gridRowEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        gridRowEnd: 'c',
      },
      [theme.breakpoints.small]: {
        gridRowEnd: 'd',
      },
    });
  });
});
