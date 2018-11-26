import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { counterIncrement } from '../counterIncrement';

describe('counterIncrement', () => {
  it('should return a function', () => {
    const result = counterIncrement();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `counterIncrement` as component and css prop', () => {
    const result = counterIncrement()({ counterIncrement: 'inherit' });
    expect(result).toEqual({ counterIncrement: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = counterIncrement<'a'>()({ counterIncrement: 'a' });
    expect(result).toEqual({ counterIncrement: 'a' });
  });

  it('should allow using a theme', () => {
    const result = counterIncrement<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ counterIncrement: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      counterIncrement: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = counterIncrement<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      counterIncrement: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      counterIncrement: 'a',
      [theme.breakpoints.large]: {
        counterIncrement: 'b',
      },
      [theme.breakpoints.medium]: {
        counterIncrement: 'c',
      },
      [theme.breakpoints.small]: {
        counterIncrement: 'd',
      },
    });
  });
});
