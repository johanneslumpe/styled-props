import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowY } from '../overflowY';

describe('overflowY', () => {
  it('should return a function', () => {
    const result = overflowY();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowY` as component and css prop', () => {
    const result = overflowY()({ overflowY: 'inherit' });
    expect(result).toEqual({ overflowY: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowY<'a'>()({ overflowY: 'a' });
    expect(result).toEqual({ overflowY: 'a' });
  });

  it('should use an interface which marks `overflowY` as optional', () => {
    const result = overflowY<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = overflowY<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ overflowY: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowY: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowY<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      overflowY: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowY: 'a',
      [theme.breakpoints.large]: {
        overflowY: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowY: 'c',
      },
      [theme.breakpoints.small]: {
        overflowY: 'd',
      },
    });
  });
});
