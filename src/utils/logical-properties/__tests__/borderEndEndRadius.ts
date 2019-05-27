import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderEndEndRadius } from '../borderEndEndRadius';

describe('borderEndEndRadius', () => {
  it('should return a function', () => {
    const result = borderEndEndRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderEndEndRadius` as component and css prop', () => {
    const result = borderEndEndRadius()({ style$BorderEndEndRadius: 'inherit' });
    expect(result).toEqual({ borderEndEndRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderEndEndRadius<'a'>()({ style$BorderEndEndRadius: 'a' });
    expect(result).toEqual({ borderEndEndRadius: 'a' });
  });

  it('should use an interface which marks `borderEndEndRadius` as optional', () => {
    const result = borderEndEndRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderEndEndRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderEndEndRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderEndEndRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderEndEndRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderEndEndRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderEndEndRadius: 'a',
      [theme.breakpoints.large]: {
        borderEndEndRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderEndEndRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderEndEndRadius: 'd',
      },
    });
  });
});
