import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRule } from '../columnRule';

describe('columnRule', () => {
  it('should return a function', () => {
    const result = columnRule();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRule` as component and css prop', () => {
    const result = columnRule()({ columnRule: 'inherit' });
    expect(result).toEqual({ columnRule: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRule<'a'>()({ columnRule: 'a' });
    expect(result).toEqual({ columnRule: 'a' });
  });

  it('should allow using a theme', () => {
    const result = columnRule<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnRule: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRule: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRule<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnRule: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnRule: 'a',
      [theme.breakpoints.large]: {
        columnRule: 'b',
      },
      [theme.breakpoints.medium]: {
        columnRule: 'c',
      },
      [theme.breakpoints.small]: {
        columnRule: 'd',
      },
    });
  });
});
