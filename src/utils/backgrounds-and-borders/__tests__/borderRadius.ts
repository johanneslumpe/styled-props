import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRadius } from '../borderRadius';

describe('borderRadius', () => {
  it('should return a function', () => {
    const result = borderRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRadius` as component and css prop', () => {
    const result = borderRadius()({ borderRadius: 'inherit' });
    expect(result).toEqual({ borderRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRadius<'a'>()({ borderRadius: 'a' });
    expect(result).toEqual({ borderRadius: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderRadius<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRadius<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRadius: 'a',
      [theme.breakpoints.large]: {
        borderRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderRadius: 'd',
      },
    });
  });
});
