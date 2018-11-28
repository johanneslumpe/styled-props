import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { emptyCells } from '../emptyCells';

describe('emptyCells', () => {
  it('should return a function', () => {
    const result = emptyCells();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `emptyCells` as component and css prop', () => {
    const result = emptyCells()({ emptyCells: 'inherit' });
    expect(result).toEqual({ emptyCells: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = emptyCells<'a'>()({ emptyCells: 'a' });
    expect(result).toEqual({ emptyCells: 'a' });
  });

  it('should use an interface which marks `emptyCells` as optional', () => {
    const result = emptyCells<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = emptyCells<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ emptyCells: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      emptyCells: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = emptyCells<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      emptyCells: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      emptyCells: 'a',
      [theme.breakpoints.large]: {
        emptyCells: 'b',
      },
      [theme.breakpoints.medium]: {
        emptyCells: 'c',
      },
      [theme.breakpoints.small]: {
        emptyCells: 'd',
      },
    });
  });
});
