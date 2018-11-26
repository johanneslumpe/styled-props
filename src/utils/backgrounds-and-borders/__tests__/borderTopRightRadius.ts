import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopRightRadius } from '../borderTopRightRadius';

describe('borderTopRightRadius', () => {
  it('should return a function', () => {
    const result = borderTopRightRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopRightRadius` as component and css prop', () => {
    const result = borderTopRightRadius()({ borderTopRightRadius: 'inherit' });
    expect(result).toEqual({ borderTopRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopRightRadius<'a'>()({ borderTopRightRadius: 'a' });
    expect(result).toEqual({ borderTopRightRadius: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderTopRightRadius<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderTopRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopRightRadius<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderTopRightRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopRightRadius: 'a',
      [theme.breakpoints.large]: {
        borderTopRightRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopRightRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopRightRadius: 'd',
      },
    });
  });
});
