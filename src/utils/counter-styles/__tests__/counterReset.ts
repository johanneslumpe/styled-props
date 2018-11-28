import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { counterReset } from '../counterReset';

describe('counterReset', () => {
  it('should return a function', () => {
    const result = counterReset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `counterReset` as component and css prop', () => {
    const result = counterReset()({ counterReset: 'inherit' });
    expect(result).toEqual({ counterReset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = counterReset<'a'>()({ counterReset: 'a' });
    expect(result).toEqual({ counterReset: 'a' });
  });

  it('should use an interface which marks `counterReset` as optional', () => {
    const result = counterReset<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = counterReset<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ counterReset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      counterReset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = counterReset<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      counterReset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      counterReset: 'a',
      [theme.breakpoints.large]: {
        counterReset: 'b',
      },
      [theme.breakpoints.medium]: {
        counterReset: 'c',
      },
      [theme.breakpoints.small]: {
        counterReset: 'd',
      },
    });
  });
});
