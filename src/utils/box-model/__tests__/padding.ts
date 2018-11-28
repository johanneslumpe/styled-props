import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { padding } from '../padding';

describe('padding', () => {
  it('should return a function', () => {
    const result = padding();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `padding` as component and css prop', () => {
    const result = padding()({ padding: 'inherit' });
    expect(result).toEqual({ padding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = padding<'a'>()({ padding: 'a' });
    expect(result).toEqual({ padding: 'a' });
  });

  it('should use an interface which marks `padding` as optional', () => {
    const result = padding<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = padding<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ padding: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      padding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = padding<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      padding: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      padding: 'a',
      [theme.breakpoints.large]: {
        padding: 'b',
      },
      [theme.breakpoints.medium]: {
        padding: 'c',
      },
      [theme.breakpoints.small]: {
        padding: 'd',
      },
    });
  });
});
