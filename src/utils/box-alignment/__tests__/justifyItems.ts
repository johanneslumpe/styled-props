import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { justifyItems } from '../justifyItems';

describe('justifyItems', () => {
  it('should return a function', () => {
    const result = justifyItems();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `justifyItems` as component and css prop', () => {
    const result = justifyItems()({ justifyItems: 'inherit' });
    expect(result).toEqual({ justifyItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifyItems<'a'>()({ justifyItems: 'a' });
    expect(result).toEqual({ justifyItems: 'a' });
  });

  it('should allow using a theme', () => {
    const result = justifyItems<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ justifyItems: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      justifyItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifyItems<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      justifyItems: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      justifyItems: 'a',
      [theme.breakpoints.large]: {
        justifyItems: 'b',
      },
      [theme.breakpoints.medium]: {
        justifyItems: 'c',
      },
      [theme.breakpoints.small]: {
        justifyItems: 'd',
      },
    });
  });
});
