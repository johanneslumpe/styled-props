import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { boxSizing } from '../boxSizing';

describe('boxSizing', () => {
  it('should return a function', () => {
    const result = boxSizing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `boxSizing` as component and css prop', () => {
    const result = boxSizing()({ boxSizing: 'inherit' });
    expect(result).toEqual({ boxSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxSizing<'a'>()({ boxSizing: 'a' });
    expect(result).toEqual({ boxSizing: 'a' });
  });

  it('should allow using a theme', () => {
    const result = boxSizing<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ boxSizing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      boxSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxSizing<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      boxSizing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      boxSizing: 'a',
      [theme.breakpoints.large]: {
        boxSizing: 'b',
      },
      [theme.breakpoints.medium]: {
        boxSizing: 'c',
      },
      [theme.breakpoints.small]: {
        boxSizing: 'd',
      },
    });
  });
});
