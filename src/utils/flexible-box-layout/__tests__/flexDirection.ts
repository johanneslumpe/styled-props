import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexDirection } from '../flexDirection';

describe('flexDirection', () => {
  it('should return a function', () => {
    const result = flexDirection();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexDirection` as component and css prop', () => {
    const result = flexDirection()({ flexDirection: 'inherit' });
    expect(result).toEqual({ flexDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexDirection<'a'>()({ flexDirection: 'a' });
    expect(result).toEqual({ flexDirection: 'a' });
  });

  it('should allow using a theme', () => {
    const result = flexDirection<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ flexDirection: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexDirection<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      flexDirection: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexDirection: 'a',
      [theme.breakpoints.large]: {
        flexDirection: 'b',
      },
      [theme.breakpoints.medium]: {
        flexDirection: 'c',
      },
      [theme.breakpoints.small]: {
        flexDirection: 'd',
      },
    });
  });
});
