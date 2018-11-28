import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecorationLine } from '../textDecorationLine';

describe('textDecorationLine', () => {
  it('should return a function', () => {
    const result = textDecorationLine();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecorationLine` as component and css prop', () => {
    const result = textDecorationLine()({ textDecorationLine: 'inherit' });
    expect(result).toEqual({ textDecorationLine: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationLine<'a'>()({ textDecorationLine: 'a' });
    expect(result).toEqual({ textDecorationLine: 'a' });
  });

  it('should use an interface which marks `textDecorationLine` as optional', () => {
    const result = textDecorationLine<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textDecorationLine<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textDecorationLine: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecorationLine: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationLine<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textDecorationLine: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecorationLine: 'a',
      [theme.breakpoints.large]: {
        textDecorationLine: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecorationLine: 'c',
      },
      [theme.breakpoints.small]: {
        textDecorationLine: 'd',
      },
    });
  });
});
