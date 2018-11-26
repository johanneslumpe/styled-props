import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { alignSelf } from '../alignSelf';

describe('alignSelf', () => {
  it('should return a function', () => {
    const result = alignSelf();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `alignSelf` as component and css prop', () => {
    const result = alignSelf()({ alignSelf: 'inherit' });
    expect(result).toEqual({ alignSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignSelf<'a'>()({ alignSelf: 'a' });
    expect(result).toEqual({ alignSelf: 'a' });
  });

  it('should allow using a theme', () => {
    const result = alignSelf<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ alignSelf: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      alignSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignSelf<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      alignSelf: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      alignSelf: 'a',
      [theme.breakpoints.large]: {
        alignSelf: 'b',
      },
      [theme.breakpoints.medium]: {
        alignSelf: 'c',
      },
      [theme.breakpoints.small]: {
        alignSelf: 'd',
      },
    });
  });
});
