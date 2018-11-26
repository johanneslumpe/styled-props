import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomLeftRadius } from '../borderBottomLeftRadius';

describe('borderBottomLeftRadius', () => {
  it('should return a function', () => {
    const result = borderBottomLeftRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomLeftRadius` as component and css prop', () => {
    const result = borderBottomLeftRadius()({ borderBottomLeftRadius: 'inherit' });
    expect(result).toEqual({ borderBottomLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomLeftRadius<'a'>()({ borderBottomLeftRadius: 'a' });
    expect(result).toEqual({ borderBottomLeftRadius: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBottomLeftRadius<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBottomLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomLeftRadius<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBottomLeftRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomLeftRadius: 'a',
      [theme.breakpoints.large]: {
        borderBottomLeftRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomLeftRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomLeftRadius: 'd',
      },
    });
  });
});
