import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { left } from '../left';

describe('left', () => {
  it('should return a function', () => {
    const result = left();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `left` as component and css prop', () => {
    const result = left()({ left: 'inherit' });
    expect(result).toEqual({ left: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = left<'a'>()({ left: 'a' });
    expect(result).toEqual({ left: 'a' });
  });

  it('should use an interface which marks `left` as optional', () => {
    const result = left<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = left<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ left: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      left: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = left<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      left: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      left: 'a',
      [theme.breakpoints.large]: {
        left: 'b',
      },
      [theme.breakpoints.medium]: {
        left: 'c',
      },
      [theme.breakpoints.small]: {
        left: 'd',
      },
    });
  });
});
