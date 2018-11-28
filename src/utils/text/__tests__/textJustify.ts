import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textJustify } from '../textJustify';

describe('textJustify', () => {
  it('should return a function', () => {
    const result = textJustify();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textJustify` as component and css prop', () => {
    const result = textJustify()({ textJustify: 'inherit' });
    expect(result).toEqual({ textJustify: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textJustify<'a'>()({ textJustify: 'a' });
    expect(result).toEqual({ textJustify: 'a' });
  });

  it('should use an interface which marks `textJustify` as optional', () => {
    const result = textJustify<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textJustify<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textJustify: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textJustify: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textJustify<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textJustify: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textJustify: 'a',
      [theme.breakpoints.large]: {
        textJustify: 'b',
      },
      [theme.breakpoints.medium]: {
        textJustify: 'c',
      },
      [theme.breakpoints.small]: {
        textJustify: 'd',
      },
    });
  });
});
