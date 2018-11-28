import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridColumnStart } from '../gridColumnStart';

describe('gridColumnStart', () => {
  it('should return a function', () => {
    const result = gridColumnStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridColumnStart` as component and css prop', () => {
    const result = gridColumnStart()({ gridColumnStart: 'inherit' });
    expect(result).toEqual({ gridColumnStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumnStart<'a'>()({ gridColumnStart: 'a' });
    expect(result).toEqual({ gridColumnStart: 'a' });
  });

  it('should use an interface which marks `gridColumnStart` as optional', () => {
    const result = gridColumnStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridColumnStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridColumnStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridColumnStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumnStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridColumnStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridColumnStart: 'a',
      [theme.breakpoints.large]: {
        gridColumnStart: 'b',
      },
      [theme.breakpoints.medium]: {
        gridColumnStart: 'c',
      },
      [theme.breakpoints.small]: {
        gridColumnStart: 'd',
      },
    });
  });
});
