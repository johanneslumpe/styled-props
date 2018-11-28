import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transformStyle } from '../transformStyle';

describe('transformStyle', () => {
  it('should return a function', () => {
    const result = transformStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transformStyle` as component and css prop', () => {
    const result = transformStyle()({ transformStyle: 'inherit' });
    expect(result).toEqual({ transformStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformStyle<'a'>()({ transformStyle: 'a' });
    expect(result).toEqual({ transformStyle: 'a' });
  });

  it('should use an interface which marks `transformStyle` as optional', () => {
    const result = transformStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transformStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transformStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transformStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transformStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transformStyle: 'a',
      [theme.breakpoints.large]: {
        transformStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        transformStyle: 'c',
      },
      [theme.breakpoints.small]: {
        transformStyle: 'd',
      },
    });
  });
});
