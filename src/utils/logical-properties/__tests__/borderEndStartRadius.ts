import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderEndStartRadius } from '../borderEndStartRadius';

describe('borderEndStartRadius', () => {
  it('should return a function', () => {
    const result = borderEndStartRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderEndStartRadius` as component and css prop', () => {
    const result = borderEndStartRadius()({ style$BorderEndStartRadius: 'inherit' });
    expect(result).toEqual({ borderEndStartRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderEndStartRadius<'a'>()({ style$BorderEndStartRadius: 'a' });
    expect(result).toEqual({ borderEndStartRadius: 'a' });
  });

  it('should use an interface which marks `borderEndStartRadius` as optional', () => {
    const result = borderEndStartRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderEndStartRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderEndStartRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderEndStartRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderEndStartRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderEndStartRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderEndStartRadius: 'a',
      [theme.breakpoints.large]: {
        borderEndStartRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderEndStartRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderEndStartRadius: 'd',
      },
    });
  });
});
