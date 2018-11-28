import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { listStyle } from '../listStyle';

describe('listStyle', () => {
  it('should return a function', () => {
    const result = listStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `listStyle` as component and css prop', () => {
    const result = listStyle()({ listStyle: 'inherit' });
    expect(result).toEqual({ listStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyle<'a'>()({ listStyle: 'a' });
    expect(result).toEqual({ listStyle: 'a' });
  });

  it('should use an interface which marks `listStyle` as optional', () => {
    const result = listStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = listStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ listStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      listStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      listStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      listStyle: 'a',
      [theme.breakpoints.large]: {
        listStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        listStyle: 'c',
      },
      [theme.breakpoints.small]: {
        listStyle: 'd',
      },
    });
  });
});
