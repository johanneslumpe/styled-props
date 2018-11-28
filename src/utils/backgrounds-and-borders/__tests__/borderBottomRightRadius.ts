import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomRightRadius } from '../borderBottomRightRadius';

describe('borderBottomRightRadius', () => {
  it('should return a function', () => {
    const result = borderBottomRightRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomRightRadius` as component and css prop', () => {
    const result = borderBottomRightRadius()({ borderBottomRightRadius: 'inherit' });
    expect(result).toEqual({ borderBottomRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomRightRadius<'a'>()({ borderBottomRightRadius: 'a' });
    expect(result).toEqual({ borderBottomRightRadius: 'a' });
  });

  it('should use an interface which marks `borderBottomRightRadius` as optional', () => {
    const result = borderBottomRightRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBottomRightRadius<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBottomRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomRightRadius<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBottomRightRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomRightRadius: 'a',
      [theme.breakpoints.large]: {
        borderBottomRightRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomRightRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomRightRadius: 'd',
      },
    });
  });
});
