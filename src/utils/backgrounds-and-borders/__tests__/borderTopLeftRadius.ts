import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopLeftRadius } from '../borderTopLeftRadius';

describe('borderTopLeftRadius', () => {
  it('should return a function', () => {
    const result = borderTopLeftRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopLeftRadius` as component and css prop', () => {
    const result = borderTopLeftRadius()({ borderTopLeftRadius: 'inherit' });
    expect(result).toEqual({ borderTopLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopLeftRadius<'a'>()({ borderTopLeftRadius: 'a' });
    expect(result).toEqual({ borderTopLeftRadius: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderTopLeftRadius<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderTopLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopLeftRadius<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderTopLeftRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopLeftRadius: 'a',
      [theme.breakpoints.large]: {
        borderTopLeftRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopLeftRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopLeftRadius: 'd',
      },
    });
  });
});
