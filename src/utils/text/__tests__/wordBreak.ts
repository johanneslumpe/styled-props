import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { wordBreak } from '../wordBreak';

describe('wordBreak', () => {
  it('should return a function', () => {
    const result = wordBreak();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `wordBreak` as component and css prop', () => {
    const result = wordBreak()({ wordBreak: 'inherit' });
    expect(result).toEqual({ wordBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordBreak<'a'>()({ wordBreak: 'a' });
    expect(result).toEqual({ wordBreak: 'a' });
  });

  it('should allow using a theme', () => {
    const result = wordBreak<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ wordBreak: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      wordBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordBreak<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      wordBreak: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      wordBreak: 'a',
      [theme.breakpoints.large]: {
        wordBreak: 'b',
      },
      [theme.breakpoints.medium]: {
        wordBreak: 'c',
      },
      [theme.breakpoints.small]: {
        wordBreak: 'd',
      },
    });
  });
});
