import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { float } from '../float';

describe('float', () => {
  it('should return a function', () => {
    const result = float();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `float` as component and css prop', () => {
    const result = float()({ float: 'inherit' });
    expect(result).toEqual({ float: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = float<'a'>()({ float: 'a' });
    expect(result).toEqual({ float: 'a' });
  });

  it('should use an interface which marks `float` as optional', () => {
    const result = float<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = float<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ float: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      float: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = float<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      float: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      float: 'a',
      [theme.breakpoints.large]: {
        float: 'b',
      },
      [theme.breakpoints.medium]: {
        float: 'c',
      },
      [theme.breakpoints.small]: {
        float: 'd',
      },
    });
  });
});
