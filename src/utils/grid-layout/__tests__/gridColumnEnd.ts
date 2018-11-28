import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridColumnEnd } from '../gridColumnEnd';

describe('gridColumnEnd', () => {
  it('should return a function', () => {
    const result = gridColumnEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridColumnEnd` as component and css prop', () => {
    const result = gridColumnEnd()({ gridColumnEnd: 'inherit' });
    expect(result).toEqual({ gridColumnEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumnEnd<'a'>()({ gridColumnEnd: 'a' });
    expect(result).toEqual({ gridColumnEnd: 'a' });
  });

  it('should use an interface which marks `gridColumnEnd` as optional', () => {
    const result = gridColumnEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridColumnEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridColumnEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridColumnEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumnEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridColumnEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridColumnEnd: 'a',
      [theme.breakpoints.large]: {
        gridColumnEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        gridColumnEnd: 'c',
      },
      [theme.breakpoints.small]: {
        gridColumnEnd: 'd',
      },
    });
  });
});
