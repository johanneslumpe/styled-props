import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { listStylePosition } from '../listStylePosition';

describe('listStylePosition', () => {
  it('should return a function', () => {
    const result = listStylePosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `listStylePosition` as component and css prop', () => {
    const result = listStylePosition()({ listStylePosition: 'inherit' });
    expect(result).toEqual({ listStylePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStylePosition<'a'>()({ listStylePosition: 'a' });
    expect(result).toEqual({ listStylePosition: 'a' });
  });

  it('should allow using a theme', () => {
    const result = listStylePosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ listStylePosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      listStylePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStylePosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      listStylePosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      listStylePosition: 'a',
      [theme.breakpoints.large]: {
        listStylePosition: 'b',
      },
      [theme.breakpoints.medium]: {
        listStylePosition: 'c',
      },
      [theme.breakpoints.small]: {
        listStylePosition: 'd',
      },
    });
  });
});
