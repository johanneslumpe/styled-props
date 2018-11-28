import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { wordWrap } from '../wordWrap';

describe('wordWrap', () => {
  it('should return a function', () => {
    const result = wordWrap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `wordWrap` as component and css prop', () => {
    const result = wordWrap()({ wordWrap: 'inherit' });
    expect(result).toEqual({ wordWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordWrap<'a'>()({ wordWrap: 'a' });
    expect(result).toEqual({ wordWrap: 'a' });
  });

  it('should use an interface which marks `wordWrap` as optional', () => {
    const result = wordWrap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = wordWrap<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ wordWrap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      wordWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordWrap<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      wordWrap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      wordWrap: 'a',
      [theme.breakpoints.large]: {
        wordWrap: 'b',
      },
      [theme.breakpoints.medium]: {
        wordWrap: 'c',
      },
      [theme.breakpoints.small]: {
        wordWrap: 'd',
      },
    });
  });
});
