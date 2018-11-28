import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnWidth } from '../columnWidth';

describe('columnWidth', () => {
  it('should return a function', () => {
    const result = columnWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnWidth` as component and css prop', () => {
    const result = columnWidth()({ columnWidth: 'inherit' });
    expect(result).toEqual({ columnWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnWidth<'a'>()({ columnWidth: 'a' });
    expect(result).toEqual({ columnWidth: 'a' });
  });

  it('should use an interface which marks `columnWidth` as optional', () => {
    const result = columnWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnWidth: 'a',
      [theme.breakpoints.large]: {
        columnWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        columnWidth: 'c',
      },
      [theme.breakpoints.small]: {
        columnWidth: 'd',
      },
    });
  });
});
