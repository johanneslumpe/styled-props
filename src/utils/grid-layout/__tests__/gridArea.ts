import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridArea } from '../gridArea';

describe('gridArea', () => {
  it('should return a function', () => {
    const result = gridArea();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridArea` as component and css prop', () => {
    const result = gridArea()({ gridArea: 'inherit' });
    expect(result).toEqual({ gridArea: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridArea<'a'>()({ gridArea: 'a' });
    expect(result).toEqual({ gridArea: 'a' });
  });

  it('should use an interface which marks `gridArea` as optional', () => {
    const result = gridArea<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridArea<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridArea: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridArea: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridArea<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridArea: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridArea: 'a',
      [theme.breakpoints.large]: {
        gridArea: 'b',
      },
      [theme.breakpoints.medium]: {
        gridArea: 'c',
      },
      [theme.breakpoints.small]: {
        gridArea: 'd',
      },
    });
  });
});
